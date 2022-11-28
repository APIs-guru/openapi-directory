from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class JobStatusStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"


@dataclass_json
@dataclass
class JobStatus:
    r"""JobStatus
    Job status.
    """
    
    run_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runDuration') }})
    state: Optional[JobStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status_events: Optional[List[StatusEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusEvents') }})
    task_groups: Optional[dict[str, TaskGroupStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    
