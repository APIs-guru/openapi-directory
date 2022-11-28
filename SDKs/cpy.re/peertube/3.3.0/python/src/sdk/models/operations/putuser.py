from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class PutUserPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUserRequest:
    path_params: PutUserPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutUserSecurity = field()
    

@dataclass
class PutUserResponse:
    content_type: str = field()
    status_code: int = field()
    
