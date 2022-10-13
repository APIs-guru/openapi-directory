from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetFlagItemPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFlagItemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFlagItemRequest:
    path_params: GetFlagItemPathParams = field(default=None)
    security: GetFlagItemSecurity = field(default=None)
    

@dataclass
class GetFlagItemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_items: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
