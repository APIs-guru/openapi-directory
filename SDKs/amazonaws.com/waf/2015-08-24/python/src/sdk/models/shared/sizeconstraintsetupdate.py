from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import sizeconstraint


@dataclass_json
@dataclass
class SizeConstraintSetUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    size_constraint: sizeconstraint.SizeConstraint = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeConstraint' }})
    
