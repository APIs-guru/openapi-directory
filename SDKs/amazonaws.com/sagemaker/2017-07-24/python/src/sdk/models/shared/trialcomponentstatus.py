from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrialComponentStatus:
    r"""TrialComponentStatus
    The status of the trial component.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    primary_status: Optional[TrialComponentPrimaryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryStatus') }})
    
