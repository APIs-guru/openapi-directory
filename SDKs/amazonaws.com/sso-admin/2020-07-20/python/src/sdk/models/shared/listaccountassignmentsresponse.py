from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountassignment


@dataclass_json
@dataclass
class ListAccountAssignmentsResponse:
    account_assignments: Optional[List[accountassignment.AccountAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAssignments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
