from dataclasses import dataclass, field



@dataclass
class UnmoderateConversationPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnmoderateConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnmoderateConversationRequest:
    path_params: UnmoderateConversationPathParams = field(default=None)
    security: UnmoderateConversationSecurity = field(default=None)
    

@dataclass
class UnmoderateConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
