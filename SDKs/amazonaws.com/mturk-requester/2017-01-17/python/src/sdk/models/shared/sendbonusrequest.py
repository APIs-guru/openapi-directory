from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendBonusRequest:
    assignment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssignmentId' }})
    bonus_amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BonusAmount' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }})
    unique_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueRequestToken' }})
    worker_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkerId' }})
    
