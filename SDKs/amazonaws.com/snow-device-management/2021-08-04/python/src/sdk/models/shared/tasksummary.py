from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskSummary:
    r"""TaskSummary
    Information about the task assigned to one or many devices.
    """
    
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskId') }})
    state: Optional[TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskArn') }})
    
