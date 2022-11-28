from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PillarDifference:
    r"""PillarDifference
    A pillar difference return object.
    """
    
    difference_status: Optional[DifferenceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DifferenceStatus') }})
    pillar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PillarId') }})
    question_differences: Optional[List[QuestionDifference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionDifferences') }})
    
