from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policy


@dataclass_json
@dataclass
class DescribePolicyResponse:
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    
