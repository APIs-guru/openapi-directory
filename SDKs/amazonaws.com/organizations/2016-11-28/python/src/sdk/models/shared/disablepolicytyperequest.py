from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import policytype_enum


@dataclass_json
@dataclass
class DisablePolicyTypeRequest:
    policy_type: policytype_enum.PolicyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    root_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootId' }})
    
