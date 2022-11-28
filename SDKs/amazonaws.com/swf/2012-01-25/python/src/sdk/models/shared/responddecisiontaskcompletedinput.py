from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RespondDecisionTaskCompletedInput:
    r"""RespondDecisionTaskCompletedInput
    Input data for a TaskCompleted response to a decision task.
    """
    
    task_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskToken') }})
    decisions: Optional[List[Decision]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisions') }})
    execution_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionContext') }})
    
