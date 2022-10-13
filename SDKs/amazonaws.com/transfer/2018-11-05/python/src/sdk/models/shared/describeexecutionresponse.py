from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describedexecution


@dataclass_json
@dataclass
class DescribeExecutionResponse:
    execution: describedexecution.DescribedExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Execution' }})
    workflow_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkflowId' }})
    
