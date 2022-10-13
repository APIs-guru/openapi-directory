from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AddUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddUserRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddUserSecurity = field(default=None)
    

@dataclass
class AddUserResponse:
    add_user_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
