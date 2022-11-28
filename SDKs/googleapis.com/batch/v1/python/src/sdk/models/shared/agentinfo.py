from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AgentInfoStateEnum(str, Enum):
    AGENT_STATE_UNSPECIFIED = "AGENT_STATE_UNSPECIFIED"
    AGENT_STARTING = "AGENT_STARTING"
    AGENT_RUNNING = "AGENT_RUNNING"
    AGENT_STOPPED = "AGENT_STOPPED"


@dataclass_json
@dataclass
class AgentInfo:
    r"""AgentInfo
    VM Agent Info.
    """
    
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    state: Optional[AgentInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    task_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroupId') }})
    tasks: Optional[List[AgentTaskInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    
