from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHitWithHitTypeRequest:
    hit_type_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITTypeId') }})
    lifetime_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifetimeInSeconds') }})
    assignment_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    hit_layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutId') }})
    hit_layout_parameters: Optional[List[HitLayoutParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITLayoutParameters') }})
    hit_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    max_assignments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAssignments') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Question') }})
    requester_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequesterAnnotation') }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueRequestToken') }})
    
