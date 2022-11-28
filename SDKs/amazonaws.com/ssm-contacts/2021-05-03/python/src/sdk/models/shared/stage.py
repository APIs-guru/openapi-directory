from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Stage:
    r"""Stage
    A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
    """
    
    duration_in_minutes: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationInMinutes') }})
    targets: List[Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    
