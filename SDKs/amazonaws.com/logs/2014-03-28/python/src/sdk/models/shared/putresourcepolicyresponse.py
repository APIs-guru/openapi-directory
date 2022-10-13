from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcepolicy


@dataclass_json
@dataclass
class PutResourcePolicyResponse:
    resource_policy: Optional[resourcepolicy.ResourcePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcePolicy' }})
    
