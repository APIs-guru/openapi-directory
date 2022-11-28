from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AgentTaskIntendedStateEnum(str, Enum):
    INTENDED_STATE_UNSPECIFIED = "INTENDED_STATE_UNSPECIFIED"
    ASSIGNED = "ASSIGNED"
    CANCELLED = "CANCELLED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class AgentTask:
    r"""AgentTask
    TODO(b/182501497) The message needs to be redefined when the Agent API server updates data in storage per the backend design.
    """
    
    intended_state: Optional[AgentTaskIntendedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedState') }})
    reached_barrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachedBarrier') }})
    spec: Optional[TaskSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[TaskStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    
