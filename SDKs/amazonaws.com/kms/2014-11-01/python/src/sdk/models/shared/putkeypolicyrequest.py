from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutKeyPolicyRequest:
    bypass_policy_lockout_safety_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BypassPolicyLockoutSafetyCheck' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    
