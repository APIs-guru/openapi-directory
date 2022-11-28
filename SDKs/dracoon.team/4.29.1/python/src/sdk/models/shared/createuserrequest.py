from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateUserRequest:
    r"""CreateUserRequest
    Request model for creating an user
    """
    
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    auth_data: Optional[UserAuthData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authData') }})
    auth_methods: Optional[List[UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expiration: Optional[ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    is_nonmember_viewer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNonmemberViewer') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    needs_to_change_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('needsToChangePassword') }})
    notify_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyUser') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverLanguage') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
