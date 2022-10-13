from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import describedworkflow


@dataclass_json
@dataclass
class DescribeWorkflowResponse:
    workflow: describedworkflow.DescribedWorkflow = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Workflow' }})
    
