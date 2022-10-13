from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RejectAssignmentRequest:
    assignment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    requester_feedback: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequesterFeedback' }})
    
