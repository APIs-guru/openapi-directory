from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostUserSample:
    admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read_only') }})
    

@dataclass
class PostUserRequest:
    request: PostUserSample = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUserResponse:
    content_type: str = field()
    status_code: int = field()
    create_user_response: Optional[shared.CreateUserResponse] = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
