from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import constraintdetail
from . import status_enum


@dataclass_json
@dataclass
class UpdateConstraintOutput:
    constraint_detail: Optional[constraintdetail.ConstraintDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintDetail' }})
    constraint_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintParameters' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
