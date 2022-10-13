from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesspolicysummary


@dataclass_json
@dataclass
class ListAccessPoliciesResponse:
    access_policy_summaries: List[accesspolicysummary.AccessPolicySummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicySummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
