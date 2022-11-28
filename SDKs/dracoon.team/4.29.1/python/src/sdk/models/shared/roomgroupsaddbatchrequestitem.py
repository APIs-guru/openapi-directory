from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class RoomGroupsAddBatchRequestItem:
    r"""RoomGroupsAddBatchRequestItem
    Request item model for granting group to the room
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    permissions: NodePermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    new_group_member_acceptance: Optional[RoomGroupsAddBatchRequestItemNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newGroupMemberAcceptance') }})
    
