from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostRequestPasswordResetSample:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass
class PostRequestPasswordResetRequest:
    request: PostRequestPasswordResetSample = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRequestPasswordResetResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    request_password_reset_response: Optional[shared.RequestPasswordResetResponse] = field(default=None)
    
