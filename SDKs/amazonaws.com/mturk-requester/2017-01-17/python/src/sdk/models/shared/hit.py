from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hitreviewstatus_enum
from . import hitstatus_enum
from . import qualificationrequirement


@dataclass_json
@dataclass
class Hit:
    assignment_duration_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentDurationInSeconds' }})
    auto_approval_delay_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoApprovalDelayInSeconds' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expiration', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hit_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITGroupId' }})
    hit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    hit_layout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITLayoutId' }})
    hit_review_status: Optional[hitreviewstatus_enum.HitReviewStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITReviewStatus' }})
    hit_status: Optional[hitstatus_enum.HitStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITStatus' }})
    hit_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITTypeId' }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Keywords' }})
    max_assignments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxAssignments' }})
    number_of_assignments_available: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfAssignmentsAvailable' }})
    number_of_assignments_completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfAssignmentsCompleted' }})
    number_of_assignments_pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfAssignmentsPending' }})
    qualification_requirements: Optional[List[qualificationrequirement.QualificationRequirement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationRequirements' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Question' }})
    requester_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterAnnotation' }})
    reward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reward' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
