from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pendingassignmentdata
from . import range


@dataclass_json
@dataclass
class PendingAssignmentList:
    items: List[pendingassignmentdata.PendingAssignmentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
