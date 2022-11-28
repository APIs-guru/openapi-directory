from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChangeStatusAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass_json
@dataclass
class ChangeStatusAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    status: Optional[ChangeStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    
