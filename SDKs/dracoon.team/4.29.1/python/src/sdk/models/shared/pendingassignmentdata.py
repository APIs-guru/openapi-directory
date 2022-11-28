from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PendingAssignmentDataStateEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DENIED = "DENIED"
    WAITING = "WAITING"


@dataclass_json
@dataclass
class PendingAssignmentData:
    r"""PendingAssignmentData
    Pending assignment information
    """
    
    group_info: GroupInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupInfo') }})
    pending_group_data: PendingGroupData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingGroupData') }})
    pending_user_data: PendingUserData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingUserData') }})
    room_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomId') }})
    room_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomName') }})
    state: PendingAssignmentDataStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    user_info: UserInfo = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
