from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendWorkflowStepStateRequest:
    execution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionId') }})
    status: CustomStepStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    workflow_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkflowId') }})
    
