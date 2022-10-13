from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import historyevent
from . import workflowexecution
from . import workflowtype


@dataclass_json
@dataclass
class DecisionTask:
    events: List[historyevent.HistoryEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    previous_started_event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousStartedEventId' }})
    started_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startedEventId' }})
    task_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskToken' }})
    workflow_execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowExecution' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
