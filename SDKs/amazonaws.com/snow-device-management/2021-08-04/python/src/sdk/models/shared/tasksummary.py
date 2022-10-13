from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskstate_enum


@dataclass_json
@dataclass
class TaskSummary:
    state: Optional[taskstate_enum.TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskArn' }})
    task_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskId' }})
    
