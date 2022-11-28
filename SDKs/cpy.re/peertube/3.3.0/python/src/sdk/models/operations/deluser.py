from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DelUserPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelUserRequest:
    path_params: DelUserPathParams = field()
    security: DelUserSecurity = field()
    

@dataclass
class DelUserResponse:
    content_type: str = field()
    status_code: int = field()
    
