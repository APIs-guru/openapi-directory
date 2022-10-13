from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workflowexecution


@dataclass_json
@dataclass
class DescribeWorkflowExecutionInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    execution: workflowexecution.WorkflowExecution = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execution' }})
    
