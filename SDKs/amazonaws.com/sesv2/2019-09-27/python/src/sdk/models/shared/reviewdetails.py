from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reviewstatus_enum


@dataclass_json
@dataclass
class ReviewDetails:
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaseId' }})
    status: Optional[reviewstatus_enum.ReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
