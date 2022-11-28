from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionResults:
    r"""ExecutionResults
    Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
    """
    
    on_exception_steps: Optional[List[ExecutionStepResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnExceptionSteps') }})
    steps: Optional[List[ExecutionStepResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    
