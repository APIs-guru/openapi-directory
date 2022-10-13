from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import effectivepolicy


@dataclass_json
@dataclass
class DescribeEffectivePolicyResponse:
    effective_policy: Optional[effectivepolicy.EffectivePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectivePolicy' }})
    
