from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class VerifyUserPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class VerifyUserRequestBody:
    verification_string: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationString') }})
    is_pending_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPendingEmail') }})
    

@dataclass
class VerifyUserRequest:
    path_params: VerifyUserPathParams = field()
    request: Optional[VerifyUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VerifyUserResponse:
    content_type: str = field()
    status_code: int = field()
    
