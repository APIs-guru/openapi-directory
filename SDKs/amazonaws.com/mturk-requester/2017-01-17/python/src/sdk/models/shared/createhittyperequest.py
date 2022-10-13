from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import qualificationrequirement


@dataclass_json
@dataclass
class CreateHitTypeRequest:
    assignment_duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentDurationInSeconds' }})
    auto_approval_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoApprovalDelayInSeconds' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keywords' }})
    qualification_requirements: Optional[List[qualificationrequirement.QualificationRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationRequirements' }})
    reward: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reward' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
