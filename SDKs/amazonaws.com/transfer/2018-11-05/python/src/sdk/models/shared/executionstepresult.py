from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionStepResult:
    r"""ExecutionStepResult
    Specifies the following details for the step: error (if any), outputs (if any), and the step type.
    """
    
    error: Optional[ExecutionError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    outputs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Outputs') }})
    step_type: Optional[WorkflowStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepType') }})
    
