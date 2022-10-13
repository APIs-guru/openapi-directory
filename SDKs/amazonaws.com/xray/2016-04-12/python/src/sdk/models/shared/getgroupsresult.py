from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupsummary


@dataclass_json
@dataclass
class GetGroupsResult:
    groups: Optional[List[groupsummary.GroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
