from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workflowstep
from . import workflowstep
from . import tag


@dataclass_json
@dataclass
class CreateWorkflowRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    on_exception_steps: Optional[List[workflowstep.WorkflowStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnExceptionSteps' }})
    steps: List[workflowstep.WorkflowStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
