from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutKeyPolicyRequest:
    key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyId') }})
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policy') }})
    policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    bypass_policy_lockout_safety_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BypassPolicyLockoutSafetyCheck') }})
    
