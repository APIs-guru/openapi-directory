from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import effectivepolicytype_enum


@dataclass_json
@dataclass
class DescribeEffectivePolicyRequest:
    policy_type: effectivepolicytype_enum.EffectivePolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    
