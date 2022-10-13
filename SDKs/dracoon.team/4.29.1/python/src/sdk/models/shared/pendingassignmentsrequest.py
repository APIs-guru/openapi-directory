from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import pendingassignment


@dataclass_json
@dataclass
class PendingAssignmentsRequest:
    items: List[pendingassignment.PendingAssignment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
