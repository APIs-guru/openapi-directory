from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequestCancelExternalWorkflowExecutionDecisionAttributes:
    control: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control' }})
    run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runId' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowId' }})
    
