from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sizeconstraint


@dataclass_json
@dataclass
class SizeConstraintSet:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    size_constraint_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeConstraintSetId' }})
    size_constraints: List[sizeconstraint.SizeConstraint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeConstraints' }})
    
