from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChoiceAnswer:
    r"""ChoiceAnswer
    A choice that has been answered on a question in your workload.
    """
    
    choice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChoiceId') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    reason: Optional[ChoiceReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }})
    status: Optional[ChoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
