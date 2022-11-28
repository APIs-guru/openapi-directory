from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AddUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddUserRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AddUserSecurity = field()
    

@dataclass
class AddUserResponse:
    content_type: str = field()
    status_code: int = field()
    add_user_response: Optional[Any] = field(default=None)
    
