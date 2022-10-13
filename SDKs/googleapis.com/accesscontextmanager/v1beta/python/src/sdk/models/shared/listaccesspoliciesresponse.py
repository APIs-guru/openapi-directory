from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesspolicy


@dataclass_json
@dataclass
class ListAccessPoliciesResponse:
    access_policies: Optional[List[accesspolicy.AccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
