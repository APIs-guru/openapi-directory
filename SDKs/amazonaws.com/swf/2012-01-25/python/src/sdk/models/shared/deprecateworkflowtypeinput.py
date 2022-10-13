from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workflowtype


@dataclass_json
@dataclass
class DeprecateWorkflowTypeInput:
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    workflow_type: workflowtype.WorkflowType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflowType' }})
    
