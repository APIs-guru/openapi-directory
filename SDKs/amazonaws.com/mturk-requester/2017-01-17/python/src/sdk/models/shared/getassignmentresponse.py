from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assignment
from . import hit


@dataclass_json
@dataclass
class GetAssignmentResponse:
    assignment: Optional[assignment.Assignment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Assignment' }})
    hit: Optional[hit.Hit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HIT' }})
    
