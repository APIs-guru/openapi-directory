from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class EnterpriseAdminCreateUserRequestBody:
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass
class EnterpriseAdminCreateUserRequest:
    request: Optional[EnterpriseAdminCreateUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateUserResponse:
    content_type: str = field()
    status_code: int = field()
    simple_user: Optional[shared.SimpleUser] = field(default=None)
    
