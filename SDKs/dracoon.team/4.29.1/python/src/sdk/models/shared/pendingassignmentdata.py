from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import groupinfo
from . import pendinggroupdata
from . import pendinguserdata
from . import userinfo

class PendingAssignmentDataStateEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    DENIED = "DENIED"
    WAITING = "WAITING"


@dataclass_json
@dataclass
class PendingAssignmentData:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    group_info: groupinfo.GroupInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupInfo' }})
    pending_group_data: pendinggroupdata.PendingGroupData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingGroupData' }})
    pending_user_data: pendinguserdata.PendingUserData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingUserData' }})
    room_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomId' }})
    room_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomName' }})
    state: PendingAssignmentDataStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_info: userinfo.UserInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userInfo' }})
    
