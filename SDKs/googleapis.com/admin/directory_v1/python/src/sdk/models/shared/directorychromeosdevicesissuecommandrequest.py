from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum(str, Enum):
    COMMAND_TYPE_UNSPECIFIED = "COMMAND_TYPE_UNSPECIFIED"
    REBOOT = "REBOOT"
    TAKE_A_SCREENSHOT = "TAKE_A_SCREENSHOT"
    SET_VOLUME = "SET_VOLUME"
    WIPE_USERS = "WIPE_USERS"
    REMOTE_POWERWASH = "REMOTE_POWERWASH"


@dataclass_json
@dataclass
class DirectoryChromeosdevicesIssueCommandRequest:
    command_type: Optional[DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commandType' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    
