from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sizeconstraintsetsummary


@dataclass_json
@dataclass
class ListSizeConstraintSetsResponse:
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    size_constraint_sets: Optional[List[sizeconstraintsetsummary.SizeConstraintSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeConstraintSets' }})
    
