from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserRequest:
    security: GetUserSecurity = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    user_response: Optional[shared.UserResponse] = field(default=None)
    
