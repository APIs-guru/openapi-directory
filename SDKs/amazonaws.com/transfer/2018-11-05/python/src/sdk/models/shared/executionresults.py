from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import executionstepresult
from . import executionstepresult


@dataclass_json
@dataclass
class ExecutionResults:
    on_exception_steps: Optional[List[executionstepresult.ExecutionStepResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnExceptionSteps' }})
    steps: Optional[List[executionstepresult.ExecutionStepResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Steps' }})
    
