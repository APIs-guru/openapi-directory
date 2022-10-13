from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userauthdata
from . import userauthmethod
from . import customerdata
from . import userattributes
from . import usergroup
from . import rolelist


@dataclass_json
@dataclass
class UserAccount:
    auth_data: userauthdata.UserAuthData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authData' }})
    auth_methods: Optional[List[userauthmethod.UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    customer: customerdata.CustomerData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    has_manageable_rooms: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasManageableRooms' }})
    home_room_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomId' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncryptionEnabled' }})
    is_locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_login_fail_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginFailAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_login_fail_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginFailIp' }})
    last_login_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginSuccessAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_login_success_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginSuccessIp' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    lock_status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    must_set_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mustSetEmail' }})
    needs_to_accept_eula: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'needsToAcceptEULA' }})
    needs_to_change_password: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'needsToChangePassword' }})
    needs_to_change_user_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'needsToChangeUserName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_attributes: Optional[userattributes.UserAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributes' }})
    user_groups: Optional[List[usergroup.UserGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userGroups' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    user_roles: rolelist.RoleList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoles' }})
    
