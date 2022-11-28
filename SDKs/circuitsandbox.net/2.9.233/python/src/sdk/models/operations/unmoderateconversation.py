from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnmoderateConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnmoderateConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnmoderateConversationRequest:
    path_params: UnmoderateConversationPathParams = field()
    security: UnmoderateConversationSecurity = field()
    

@dataclass
class UnmoderateConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
