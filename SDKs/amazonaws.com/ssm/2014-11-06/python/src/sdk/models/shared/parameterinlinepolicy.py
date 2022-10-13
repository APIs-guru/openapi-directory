from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterInlinePolicy:
    policy_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyStatus' }})
    policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyText' }})
    policy_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    
