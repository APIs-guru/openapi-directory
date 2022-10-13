from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcepolicy


@dataclass_json
@dataclass
class GetResourcePoliciesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_policies: List[resourcepolicy.ResourcePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourcePolicies' }})
    
