from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CancelRequest:
    r"""CancelRequest
    This type contains information about a buyer request to cancel an order.
    """
    
    cancel_completed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelCompletedDate') }})
    cancel_initiator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelInitiator') }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelReason') }})
    cancel_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequestId') }})
    cancel_request_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequestState') }})
    cancel_requested_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequestedDate') }})
    
