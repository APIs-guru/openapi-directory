from dataclasses import dataclass, field



@dataclass
class ModerateConversationPathParams:
    conv_id: str = field(default=None, metadata={'path_param': { 'field_name': 'convId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModerateConversationSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ModerateConversationRequest:
    path_params: ModerateConversationPathParams = field(default=None)
    security: ModerateConversationSecurity = field(default=None)
    

@dataclass
class ModerateConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
