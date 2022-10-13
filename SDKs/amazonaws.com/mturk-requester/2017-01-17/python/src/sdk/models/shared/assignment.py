from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import assignmentstatus_enum


@dataclass_json
@dataclass
class Assignment:
    accept_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Answer' }})
    approval_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    assignment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    assignment_status: Optional[assignmentstatus_enum.AssignmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentStatus' }})
    auto_approval_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoApprovalTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deadline: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deadline', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    rejection_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    requester_feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterFeedback' }})
    submit_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmitTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
