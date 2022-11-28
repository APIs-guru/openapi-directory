from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AccountCreateSessionRequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    

@dataclass
class AccountCreateSessionSecurity:
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateSessionRequest:
    security: AccountCreateSessionSecurity = field()
    request: Optional[AccountCreateSessionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountCreateSessionResponse:
    content_type: str = field()
    status_code: int = field()
    session: Optional[shared.Session] = field(default=None)
    
