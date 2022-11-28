from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoalSetData:
    r"""GoalSetData
    Represents a set of goals that were reached in an activity.
    """
    
    goals: Optional[List[GoalData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goals') }})
    
