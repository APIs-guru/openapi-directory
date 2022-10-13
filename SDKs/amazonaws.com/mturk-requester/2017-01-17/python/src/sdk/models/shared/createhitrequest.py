from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reviewpolicy
from . import hitlayoutparameter
from . import reviewpolicy
from . import qualificationrequirement


@dataclass_json
@dataclass
class CreateHitRequest:
    assignment_duration_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentDurationInSeconds' }})
    assignment_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentReviewPolicy' }})
    auto_approval_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoApprovalDelayInSeconds' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    hit_layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITLayoutId' }})
    hit_layout_parameters: Optional[List[hitlayoutparameter.HitLayoutParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITLayoutParameters' }})
    hit_review_policy: Optional[reviewpolicy.ReviewPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITReviewPolicy' }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keywords' }})
    lifetime_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifetimeInSeconds' }})
    max_assignments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAssignments' }})
    qualification_requirements: Optional[List[qualificationrequirement.QualificationRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationRequirements' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Question' }})
    requester_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterAnnotation' }})
    reward: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reward' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueRequestToken' }})
    
