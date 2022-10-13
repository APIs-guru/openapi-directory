from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApproveAssignmentRequest:
    assignment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    override_rejection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverrideRejection' }})
    requester_feedback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterFeedback' }})
    
