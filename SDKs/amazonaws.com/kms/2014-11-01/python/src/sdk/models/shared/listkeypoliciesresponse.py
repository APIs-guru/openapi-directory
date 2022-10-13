from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListKeyPoliciesResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    policy_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyNames' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
