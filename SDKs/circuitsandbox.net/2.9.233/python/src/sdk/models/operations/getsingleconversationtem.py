from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSingleConversationtemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSingleConversationtemSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSingleConversationtemRequest:
    path_params: GetSingleConversationtemPathParams = field(default=None)
    security: GetSingleConversationtemSecurity = field(default=None)
    

@dataclass
class GetSingleConversationtemResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
