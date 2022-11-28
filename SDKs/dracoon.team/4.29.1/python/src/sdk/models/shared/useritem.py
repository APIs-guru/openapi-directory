from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserItem:
    r"""UserItem
    User information
    """
    
    avatar_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUuid') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    lock_status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    has_manageable_rooms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasManageableRooms') }})
    home_room_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomId') }})
    is_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncryptionEnabled') }})
    last_login_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginSuccessAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_attributes: Optional[UserAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    user_roles: Optional[RoleList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoles') }})
    
