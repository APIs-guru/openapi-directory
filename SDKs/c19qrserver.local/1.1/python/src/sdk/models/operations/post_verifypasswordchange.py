from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostVerifyPasswordChangeSample:
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guid') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass
class PostVerifyPasswordChangeRequest:
    request: PostVerifyPasswordChangeSample = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVerifyPasswordChangeResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
