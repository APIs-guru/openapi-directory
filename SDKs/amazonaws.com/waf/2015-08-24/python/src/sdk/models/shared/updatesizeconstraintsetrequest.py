from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import sizeconstraintsetupdate


@dataclass_json
@dataclass
class UpdateSizeConstraintSetRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    size_constraint_set_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SizeConstraintSetId' }})
    updates: List[sizeconstraintsetupdate.SizeConstraintSetUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
