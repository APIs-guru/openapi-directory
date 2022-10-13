from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nodepermissions

class RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class RoomGroupsAddBatchRequestItem:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    new_group_member_acceptance: Optional[RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newGroupMemberAcceptance' }})
    permissions: nodepermissions.NodePermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    
