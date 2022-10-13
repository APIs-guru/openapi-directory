from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserRequest:
    security: GetUserSecurity = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
