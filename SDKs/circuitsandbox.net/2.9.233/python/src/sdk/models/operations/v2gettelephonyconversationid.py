from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class V2GetTelephonyConversationIDSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetTelephonyConversationIDRequest:
    security: V2GetTelephonyConversationIDSecurity = field()
    

@dataclass
class V2GetTelephonyConversationIDResponse:
    content_type: str = field()
    status_code: int = field()
    
