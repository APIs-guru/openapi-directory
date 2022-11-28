from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class JobResponseStatusEnum(str, Enum):
    NOT_STARTED = "not_started"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass_json
@dataclass
class JobResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    new_project: Optional[ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_project') }})
    new_task: Optional[TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_task') }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    status: Optional[JobResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
