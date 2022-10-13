from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import executionerror
from . import workflowsteptype_enum


@dataclass_json
@dataclass
class ExecutionStepResult:
    error: Optional[executionerror.ExecutionError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    outputs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Outputs' }})
    step_type: Optional[workflowsteptype_enum.WorkflowStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepType' }})
    
