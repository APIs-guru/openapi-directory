from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribedWorkflow:
    r"""DescribedWorkflow
    Describes the properties of the specified workflow
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    on_exception_steps: Optional[List[WorkflowStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    steps: Optional[List[WorkflowStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    workflow_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
