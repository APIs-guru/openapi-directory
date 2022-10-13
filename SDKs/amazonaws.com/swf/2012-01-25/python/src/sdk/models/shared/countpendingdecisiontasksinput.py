from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tasklist


@dataclass_json
@dataclass
class CountPendingDecisionTasksInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    task_list: tasklist.TaskList = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskList' }})
    
