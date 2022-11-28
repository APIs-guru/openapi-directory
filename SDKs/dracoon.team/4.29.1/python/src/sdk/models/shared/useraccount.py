from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserAccount:
    r"""UserAccount
    User information
    """
    
    auth_data: UserAuthData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authData') }})
    customer: CustomerData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    has_manageable_rooms: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasManageableRooms') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    lock_status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    needs_to_change_password: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('needsToChangePassword') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    user_roles: RoleList = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoles') }})
    auth_methods: Optional[List[UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    home_room_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomId') }})
    is_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncryptionEnabled') }})
    last_login_fail_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginFailAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_login_fail_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginFailIp') }})
    last_login_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginSuccessAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_login_success_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginSuccessIp') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    must_set_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mustSetEmail') }})
    needs_to_accept_eula: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('needsToAcceptEULA') }})
    needs_to_change_user_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('needsToChangeUserName') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_attributes: Optional[UserAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    user_groups: Optional[List[UserGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userGroups') }})
    
