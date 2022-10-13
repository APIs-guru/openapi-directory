from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reviewpolicy
from . import reviewreport
from . import reviewpolicy
from . import reviewreport


@dataclass_json
@dataclass
class ListReviewPolicyResultsForHitResponse:
    assignment_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentReviewPolicy' }})
    assignment_review_report: Optional[reviewreport.ReviewReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentReviewReport' }})
    hit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    hit_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITReviewPolicy' }})
    hit_review_report: Optional[reviewreport.ReviewReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITReviewReport' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
