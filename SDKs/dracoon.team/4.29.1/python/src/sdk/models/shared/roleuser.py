from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import userinfo


@dataclass_json
@dataclass
class RoleUser:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_member: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMember' }})
    user_info: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    
