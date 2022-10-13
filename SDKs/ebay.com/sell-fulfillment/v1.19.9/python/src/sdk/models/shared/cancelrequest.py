from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelRequest:
    cancel_completed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelCompletedDate' }})
    cancel_initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelInitiator' }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelReason' }})
    cancel_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequestId' }})
    cancel_request_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequestState' }})
    cancel_requested_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelRequestedDate' }})
    
