from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PinAConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PinAConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PinAConversationRequest:
    path_params: PinAConversationPathParams = field()
    security: PinAConversationSecurity = field()
    

@dataclass
class PinAConversationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation: Optional[Any] = field(default=None)
    
