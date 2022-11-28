from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ModerateConversationPathParams:
    conv_id: str = field(metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModerateConversationSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ModerateConversationRequest:
    path_params: ModerateConversationPathParams = field()
    security: ModerateConversationSecurity = field()
    

@dataclass
class ModerateConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
