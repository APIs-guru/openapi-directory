from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkflowStep:
    r"""WorkflowStep
    The basic building block of a workflow.
    """
    
    copy_step_details: Optional[CopyStepDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyStepDetails') }})
    custom_step_details: Optional[CustomStepDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomStepDetails') }})
    delete_step_details: Optional[DeleteStepDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteStepDetails') }})
    tag_step_details: Optional[TagStepDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagStepDetails') }})
    type: Optional[WorkflowStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
