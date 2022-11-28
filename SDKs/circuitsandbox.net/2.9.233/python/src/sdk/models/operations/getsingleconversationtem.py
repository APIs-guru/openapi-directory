from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSingleConversationtemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSingleConversationtemSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSingleConversationtemRequest:
    path_params: GetSingleConversationtemPathParams = field()
    security: GetSingleConversationtemSecurity = field()
    

@dataclass
class GetSingleConversationtemResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_item: Optional[Any] = field(default=None)
    
