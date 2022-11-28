from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MessageNewJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"

class MessageNewTaskStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ASSIGNED = "ASSIGNED"
    RUNNING = "RUNNING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"

class MessageTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    JOB_STATE_CHANGED = "JOB_STATE_CHANGED"
    TASK_STATE_CHANGED = "TASK_STATE_CHANGED"


@dataclass_json
@dataclass
class Message:
    r"""Message
    Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
    """
    
    new_job_state: Optional[MessageNewJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newJobState') }})
    new_task_state: Optional[MessageNewTaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newTaskState') }})
    type: Optional[MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
