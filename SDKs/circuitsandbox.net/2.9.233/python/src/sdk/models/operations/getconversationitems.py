from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional


@dataclass
class GetConversationItemsPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    
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
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationItemsRequest:
    path_params: GetConversationItemsPathParams = field(default=None)
    query_params: GetConversationItemsQueryParams = field(default=None)
    security: GetConversationItemsSecurity = field(default=None)
    

@dataclass
class GetConversationItemsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_items: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
