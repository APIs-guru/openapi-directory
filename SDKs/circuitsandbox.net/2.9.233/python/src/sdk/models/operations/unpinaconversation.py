from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UnPinAConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnPinAConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnPinAConversationRequest:
    path_params: UnPinAConversationPathParams = field()
    security: UnPinAConversationSecurity = field()
    

@dataclass
class UnPinAConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
