from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EstimationChangeStatusAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class EstimationChangeStatusAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    status: Optional[EstimationChangeStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    
