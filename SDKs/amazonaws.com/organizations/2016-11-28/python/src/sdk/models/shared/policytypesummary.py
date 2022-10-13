from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policytypestatus_enum
from . import policytype_enum


@dataclass_json
@dataclass
class PolicyTypeSummary:
    status: Optional[policytypestatus_enum.PolicyTypeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    type: Optional[policytype_enum.PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
