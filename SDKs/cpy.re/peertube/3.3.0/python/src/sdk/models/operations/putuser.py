from dataclasses import dataclass, field
from typing import Any


@dataclass
class PutUserPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUserRequest:
    path_params: PutUserPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutUserSecurity = field(default=None)
    

@dataclass
class PutUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
