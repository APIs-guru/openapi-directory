from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DecisionTask:
    r"""DecisionTask
    A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
    """
    
    events: List[HistoryEvent] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    task_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    workflow_execution: WorkflowExecution = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowExecution') }})
    workflow_type: WorkflowType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowType') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    previous_started_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousStartedEventId') }})
    
