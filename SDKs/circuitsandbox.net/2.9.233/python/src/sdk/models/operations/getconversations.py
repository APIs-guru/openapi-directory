from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared

class GetConversationsDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetConversationsQueryParams:
    direction: Optional[GetConversationsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    mod_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'modTime', 'style': 'form', 'explode': True }})
    results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'results', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsRequest:
    query_params: GetConversationsQueryParams = field()
    security: GetConversationsSecurity = field()
    

@dataclass
class GetConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversations: Optional[List[Any]] = field(default=None)
    
