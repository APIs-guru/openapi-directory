from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PostLoginRequestBodySourceEnum(str, Enum):
    I_OS = "iOS"
    ANDROID = "android"
    WEB = "web"


@dataclass_json
@dataclass
class PostLoginRequestBodySample:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    source: Optional[PostLoginRequestBodySourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    

@dataclass
class PostLoginRequest:
    request: PostLoginRequestBodySample = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoginResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    
