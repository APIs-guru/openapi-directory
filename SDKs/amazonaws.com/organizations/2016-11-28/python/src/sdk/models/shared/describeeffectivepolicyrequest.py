from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEffectivePolicyRequest:
    policy_type: EffectivePolicyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    
