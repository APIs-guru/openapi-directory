from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userauthdata
from . import userauthmethod
from . import publickeycontainer
from . import userattributes
from . import rolelist


@dataclass_json
@dataclass
class UserData:
    auth_data: userauthdata.UserAuthData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authData' }})
    auth_methods: Optional[List[userauthmethod.UserAuthMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMethods' }})
    avatar_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUuid' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    has_manageable_rooms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasManageableRooms' }})
    home_room_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomId' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncryptionEnabled' }})
    is_locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocked' }})
    last_login_success_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginSuccessAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    lock_status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    public_key_container: Optional[publickeycontainer.PublicKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyContainer' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    user_attributes: Optional[userattributes.UserAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAttributes' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    user_roles: Optional[rolelist.RoleList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoles' }})
    
