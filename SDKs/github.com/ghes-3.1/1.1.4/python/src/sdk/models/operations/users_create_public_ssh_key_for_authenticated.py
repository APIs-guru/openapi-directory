from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersCreatePublicSSHKeyForAuthenticatedRequestBody:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass
class UsersCreatePublicSSHKeyForAuthenticatedRequest:
    request: Optional[UsersCreatePublicSSHKeyForAuthenticatedRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersCreatePublicSSHKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
