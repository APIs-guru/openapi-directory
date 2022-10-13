from dataclasses import dataclass, field



@dataclass
class DelUserPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelUserRequest:
    path_params: DelUserPathParams = field(default=None)
    security: DelUserSecurity = field(default=None)
    

@dataclass
class DelUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
