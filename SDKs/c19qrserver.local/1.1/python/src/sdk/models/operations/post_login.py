from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class PostLoginSampleSourceEnum(str, Enum):
    I_OS = "iOS"
    ANDROID = "android"
    WEB = "web"


@dataclass_json
@dataclass
class PostLoginSample:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    source: Optional[PostLoginSampleSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    

@dataclass
class PostLoginRequest:
    request: PostLoginSample = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostLoginResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    
