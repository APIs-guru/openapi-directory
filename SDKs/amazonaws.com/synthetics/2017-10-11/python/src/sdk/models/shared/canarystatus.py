from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CanaryStatus:
    r"""CanaryStatus
    A structure that contains the current state of the canary.
    """
    
    state: Optional[CanaryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReason') }})
    state_reason_code: Optional[CanaryStateReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateReasonCode') }})
    
