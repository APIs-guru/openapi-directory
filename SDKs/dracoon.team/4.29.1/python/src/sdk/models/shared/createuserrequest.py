from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userauthdata
from . import userauthmethod
from . import objectexpiration


@dataclass_json
@dataclass
class CreateUserRequest:
    auth_data: Optional[userauthdata.UserAuthData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authData' }})
    auth_methods: Optional[List[userauthmethod.UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expiration: Optional[objectexpiration.ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    is_nonmember_viewer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNonmemberViewer' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    needs_to_change_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'needsToChangePassword' }})
    notify_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyUser' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverLanguage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
