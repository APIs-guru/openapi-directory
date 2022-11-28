from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostChangePasswordSample:
    old_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_password') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass
class PostChangePasswordRequest:
    request: PostChangePasswordSample = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostChangePasswordResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
