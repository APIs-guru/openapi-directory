from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHitRequest:
    assignment_duration_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentDurationInSeconds') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    lifetime_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifetimeInSeconds') }})
    reward: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reward') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    assignment_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    auto_approval_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoApprovalDelayInSeconds') }})
    hit_layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutId') }})
    hit_layout_parameters: Optional[List[HitLayoutParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutParameters') }})
    hit_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keywords') }})
    max_assignments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAssignments') }})
    qualification_requirements: Optional[List[QualificationRequirement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualificationRequirements') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Question') }})
    requester_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAnnotation') }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
