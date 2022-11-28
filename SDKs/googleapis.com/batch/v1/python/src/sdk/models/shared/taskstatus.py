from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TaskStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ASSIGNED = "ASSIGNED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"


@dataclass_json
@dataclass
class TaskStatus:
    r"""TaskStatus
    Status of a task
    """
    
    state: Optional[TaskStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_events: Optional[List[StatusEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusEvents') }})
    
