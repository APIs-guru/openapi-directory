from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersAddEmailForAuthenticatedRequestBody1:
    emails: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    

@dataclass
class UsersAddEmailForAuthenticatedRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersAddEmailForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    emails: Optional[List[shared.Email]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
