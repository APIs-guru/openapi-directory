from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PendingAssignmentStateEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DENIED = "DENIED"
    WAITING = "WAITING"


@dataclass_json
@dataclass
class PendingAssignment:
    r"""PendingAssignment
    Pending assignment information
    """
    
    group_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    room_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomId') }})
    room_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomName') }})
    state: PendingAssignmentStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
