from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AssignmentJobTypeEnum(str, Enum):
    JOB_TYPE_UNSPECIFIED = "JOB_TYPE_UNSPECIFIED"
    PIPELINE = "PIPELINE"
    QUERY = "QUERY"
    ML_EXTERNAL = "ML_EXTERNAL"
    BACKGROUND = "BACKGROUND"

class AssignmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class Assignment:
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    job_type: Optional[AssignmentJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[AssignmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
