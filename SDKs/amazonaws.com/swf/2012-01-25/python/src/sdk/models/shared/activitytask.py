from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityTask:
    r"""ActivityTask
    Unit of work sent to an activity worker.
    """
    
    activity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityId') }})
    activity_type: ActivityType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    task_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    
