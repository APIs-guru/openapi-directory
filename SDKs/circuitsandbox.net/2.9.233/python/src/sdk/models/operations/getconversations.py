from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional

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
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsRequest:
    query_params: GetConversationsQueryParams = field(default=None)
    security: GetConversationsSecurity = field(default=None)
    

@dataclass
class GetConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversations: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
