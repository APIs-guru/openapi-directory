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
class UserDataOutput:
    r"""UserDataOutput
    User information
    """
    
    auth_data: UserAuthData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authData') }})
    avatar_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUuid') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isLocked') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    lock_status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockStatus') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    auth_methods: Optional[List[UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethods') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    has_manageable_rooms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasManageableRooms') }})
    home_room_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomId') }})
    is_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncryptionEnabled') }})
    last_login_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginSuccessAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    public_key_container: Optional[PublicKeyContainerOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeyContainer') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_attributes: Optional[UserAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAttributes') }})
    user_roles: Optional[RoleList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoles') }})
    
