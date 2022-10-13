from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tasklist


@dataclass_json
@dataclass
class RegisterActivityTypeInput:
    default_task_heartbeat_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskHeartbeatTimeout' }})
    default_task_list: Optional[tasklist.TaskList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskList' }})
    default_task_priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskPriority' }})
    default_task_schedule_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskScheduleToCloseTimeout' }})
    default_task_schedule_to_start_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskScheduleToStartTimeout' }})
    default_task_start_to_close_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultTaskStartToCloseTimeout' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
