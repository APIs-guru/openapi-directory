from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MultiConditionalBranch:
    r"""MultiConditionalBranch
    Specifies a condition to evaluate for an activity path in a journey.
    """
    
    condition: Optional[SimpleCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    
