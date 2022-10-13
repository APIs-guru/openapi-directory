from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import directorychromeosdevicescommandresult

class DirectoryChromeosdevicesCommandStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    EXPIRED = "EXPIRED"
    CANCELLED = "CANCELLED"
    SENT_TO_CLIENT = "SENT_TO_CLIENT"
    ACKED_BY_CLIENT = "ACKED_BY_CLIENT"
    EXECUTED_BY_CLIENT = "EXECUTED_BY_CLIENT"

class DirectoryChromeosdevicesCommandTypeEnum(str, Enum):
    COMMAND_TYPE_UNSPECIFIED = "COMMAND_TYPE_UNSPECIFIED"
    REBOOT = "REBOOT"
    TAKE_A_SCREENSHOT = "TAKE_A_SCREENSHOT"
    SET_VOLUME = "SET_VOLUME"
    WIPE_USERS = "WIPE_USERS"
    REMOTE_POWERWASH = "REMOTE_POWERWASH"


@dataclass_json
@dataclass
class DirectoryChromeosdevicesCommand:
    command_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandExpireTime' }})
    command_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandId' }})
    command_result: Optional[directorychromeosdevicescommandresult.DirectoryChromeosdevicesCommandResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandResult' }})
    issue_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueTime' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    state: Optional[DirectoryChromeosdevicesCommandStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[DirectoryChromeosdevicesCommandTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
