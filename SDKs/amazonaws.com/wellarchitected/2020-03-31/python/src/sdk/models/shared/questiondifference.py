from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuestionDifference:
    r"""QuestionDifference
    A question difference return object.
    """
    
    difference_status: Optional[DifferenceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DifferenceStatus') }})
    question_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionId') }})
    question_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionTitle') }})
    
