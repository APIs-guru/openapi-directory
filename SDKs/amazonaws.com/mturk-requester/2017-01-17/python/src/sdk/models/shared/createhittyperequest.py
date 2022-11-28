from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHitTypeRequest:
    assignment_duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentDurationInSeconds') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    reward: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reward') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    auto_approval_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoApprovalDelayInSeconds') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    qualification_requirements: Optional[List[QualificationRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequirements') }})
    
