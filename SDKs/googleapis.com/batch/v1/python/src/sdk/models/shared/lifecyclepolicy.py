from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LifecyclePolicyActionEnum(str, Enum):
    ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED"
    RETRY_TASK = "RETRY_TASK"
    FAIL_TASK = "FAIL_TASK"


@dataclass_json
@dataclass
class LifecyclePolicy:
    r"""LifecyclePolicy
    LifecyclePolicy describes how to deal with task failures based on different conditions.
    """
    
    action: Optional[LifecyclePolicyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    action_condition: Optional[ActionCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionCondition') }})
    
