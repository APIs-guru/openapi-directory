from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import rowaccesspolicy


@dataclass_json
@dataclass
class ListRowAccessPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    row_access_policies: Optional[List[rowaccesspolicy.RowAccessPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowAccessPolicies' }})
    
