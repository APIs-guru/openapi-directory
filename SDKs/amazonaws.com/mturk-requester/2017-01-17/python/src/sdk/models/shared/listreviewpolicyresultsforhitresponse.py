from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListReviewPolicyResultsForHitResponse:
    assignment_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewPolicy') }})
    assignment_review_report: Optional[ReviewReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignmentReviewReport') }})
    hit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITId') }})
    hit_review_policy: Optional[ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewPolicy') }})
    hit_review_report: Optional[ReviewReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HITReviewReport') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
