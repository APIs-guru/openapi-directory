from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assignment


@dataclass_json
@dataclass
class ListAssignmentsResponse:
    assignments: Optional[List[assignment.Assignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
