from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EstimationChangeStatusAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    ACCEPTED = "Accepted"
    REJECTED = "Rejected"


@dataclass_json
@dataclass
class EstimationChangeStatusAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    status: Optional[EstimationChangeStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }, 'form': { 'field_name': 'Status' }})
    
