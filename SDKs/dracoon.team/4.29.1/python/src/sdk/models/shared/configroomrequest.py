from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ConfigRoomRequestNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class ConfigRoomRequest:
    admin_group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminGroupIds' }})
    admin_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminIds' }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasActivitiesLog' }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasRecycleBin' }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritPermissions' }})
    new_group_member_acceptance: Optional[ConfigRoomRequestNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newGroupMemberAcceptance' }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recycleBinRetentionPeriod' }})
    take_over_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'takeOverPermissions' }})
    
