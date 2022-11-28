from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetConversationItemsPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    
class GetConversationItemsDirectionEnum(str, Enum):
    BEFORE = "BEFORE"
    AFTER = "AFTER"


@dataclass
class GetConversationItemsQueryParams:
    direction: Optional[GetConversationItemsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    mod_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'modTime', 'style': 'form', 'explode': True }})
    results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'results', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationItemsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationItemsRequest:
    path_params: GetConversationItemsPathParams = field()
    query_params: GetConversationItemsQueryParams = field()
    security: GetConversationItemsSecurity = field()
    

@dataclass
class GetConversationItemsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_items: Optional[List[Any]] = field(default=None)
    
