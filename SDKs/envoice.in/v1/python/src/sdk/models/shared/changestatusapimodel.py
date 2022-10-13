from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChangeStatusAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass_json
@dataclass
class ChangeStatusAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    status: Optional[ChangeStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }, 'form': { 'field_name': 'Status' }})
    
