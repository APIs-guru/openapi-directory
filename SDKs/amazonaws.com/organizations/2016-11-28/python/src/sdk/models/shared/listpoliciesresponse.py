from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policysummary


@dataclass_json
@dataclass
class ListPoliciesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    policies: Optional[List[policysummary.PolicySummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policies' }})
    
