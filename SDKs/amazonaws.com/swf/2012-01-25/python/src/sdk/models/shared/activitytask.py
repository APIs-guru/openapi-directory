from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import activitytype
from . import workflowexecution


@dataclass_json
@dataclass
class ActivityTask:
    activity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityId' }})
    activity_type: activitytype.ActivityType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    task_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskToken' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    
