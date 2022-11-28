from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AssignmentJobTypeEnum(str, Enum):
    JOB_TYPE_UNSPECIFIED = "JOB_TYPE_UNSPECIFIED"
    PIPELINE = "PIPELINE"
    QUERY = "QUERY"
    ML_EXTERNAL = "ML_EXTERNAL"

class AssignmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class AssignmentInput:
    r"""AssignmentInput
    An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
    """
    
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    job_type: Optional[AssignmentJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    

@dataclass_json
@dataclass
class Assignment:
    r"""Assignment
    An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
    """
    
    assignee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    job_type: Optional[AssignmentJobTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[AssignmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
