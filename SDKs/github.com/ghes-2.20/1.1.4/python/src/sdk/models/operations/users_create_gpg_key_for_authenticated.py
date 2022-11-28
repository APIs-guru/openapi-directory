from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersCreateGpgKeyForAuthenticatedRequestBody:
    armored_public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('armored_public_key') }})
    

@dataclass
class UsersCreateGpgKeyForAuthenticatedRequest:
    request: Optional[UsersCreateGpgKeyForAuthenticatedRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersCreateGpgKeyForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gpg_key: Optional[shared.GpgKey] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
