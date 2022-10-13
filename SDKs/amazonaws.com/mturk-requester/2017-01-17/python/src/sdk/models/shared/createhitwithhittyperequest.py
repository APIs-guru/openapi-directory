from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reviewpolicy
from . import hitlayoutparameter
from . import reviewpolicy


@dataclass_json
@dataclass
class CreateHitWithHitTypeRequest:
    assignment_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentReviewPolicy' }})
    hit_layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITLayoutId' }})
    hit_layout_parameters: Optional[List[hitlayoutparameter.HitLayoutParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITLayoutParameters' }})
    hit_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITReviewPolicy' }})
    hit_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITTypeId' }})
    lifetime_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifetimeInSeconds' }})
    max_assignments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAssignments' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Question' }})
    requester_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterAnnotation' }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueRequestToken' }})
    
