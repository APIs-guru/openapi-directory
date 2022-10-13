from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nodepermissions
from . import publickeycontainer
from . import userinfo


@dataclass_json
@dataclass
class RoomUser:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_granted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGranted' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    permissions: Optional[nodepermissions.NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    public_key_container: Optional[publickeycontainer.PublicKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyContainer' }})
    user_info: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    
