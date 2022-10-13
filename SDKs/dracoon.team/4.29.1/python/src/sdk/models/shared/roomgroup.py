from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nodepermissions

class RoomGroupNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class RoomGroup:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_granted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isGranted' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    new_group_member_acceptance: Optional[RoomGroupNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newGroupMemberAcceptance' }})
    permissions: Optional[nodepermissions.NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
