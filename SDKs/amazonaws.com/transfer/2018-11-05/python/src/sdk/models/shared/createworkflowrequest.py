from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateWorkflowRequest:
    steps: List[WorkflowStep] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    on_exception_steps: Optional[List[WorkflowStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
