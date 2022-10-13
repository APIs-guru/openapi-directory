from dataclasses import dataclass, field



@dataclass
class V2GetTelephonyConversationIDSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class V2GetTelephonyConversationIDRequest:
    security: V2GetTelephonyConversationIDSecurity = field(default=None)
    

@dataclass
class V2GetTelephonyConversationIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
