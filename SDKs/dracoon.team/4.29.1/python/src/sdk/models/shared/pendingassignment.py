from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class PendingAssignmentStateEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DENIED = "DENIED"
    WAITING = "WAITING"


@dataclass_json
@dataclass
class PendingAssignment:
    group_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    room_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomId' }})
    room_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomName' }})
    state: PendingAssignmentStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
