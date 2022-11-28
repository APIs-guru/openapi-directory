from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UsersListBlockedByAuthenticated415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class UsersListBlockedByAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    users_list_blocked_by_authenticated_415_application_json_object: Optional[UsersListBlockedByAuthenticated415ApplicationJSON] = field(default=None)
    
