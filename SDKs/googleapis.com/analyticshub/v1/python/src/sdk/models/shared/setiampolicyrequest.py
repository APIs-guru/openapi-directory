from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policy


@dataclass_json
@dataclass
class SetIamPolicyRequest:
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
