from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentTaskInfo:
    r"""AgentTaskInfo
    Task Info
    """
    
    runnable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runnable') }})
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    task_status: Optional[TaskStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskStatus') }})
    
