from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SignalExternalWorkflowExecutionInitiatedEventAttributes:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    decision_task_completed_event_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decisionTaskCompletedEventId' }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runId' }})
    signal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signalName' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowId' }})
    
