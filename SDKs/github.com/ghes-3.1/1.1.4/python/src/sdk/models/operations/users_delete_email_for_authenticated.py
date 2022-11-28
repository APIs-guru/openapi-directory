from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersDeleteEmailForAuthenticatedRequestBody1:
    r"""UsersDeleteEmailForAuthenticatedRequestBody1
    Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
    """
    
    emails: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    

@dataclass
class UsersDeleteEmailForAuthenticatedRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersDeleteEmailForAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
