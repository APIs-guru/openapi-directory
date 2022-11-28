from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConfigRoomRequestNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class ConfigRoomRequest:
    r"""ConfigRoomRequest
    Request model for configuring a room
    """
    
    admin_group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminGroupIds') }})
    admin_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminIds') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    has_activities_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasActivitiesLog') }})
    has_recycle_bin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasRecycleBin') }})
    inherit_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritPermissions') }})
    new_group_member_acceptance: Optional[ConfigRoomRequestNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newGroupMemberAcceptance') }})
    recycle_bin_retention_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recycleBinRetentionPeriod') }})
    take_over_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('takeOverPermissions') }})
    
