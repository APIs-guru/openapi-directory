from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RoomGroupNewGroupMemberAcceptanceEnum(str, Enum):
    AUTOALLOW = "autoallow"
    PENDING = "pending"


@dataclass_json
@dataclass
class RoomGroup:
    r"""RoomGroup
    Group information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_granted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isGranted') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    new_group_member_acceptance: Optional[RoomGroupNewGroupMemberAcceptanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newGroupMemberAcceptance') }})
    permissions: Optional[NodePermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
