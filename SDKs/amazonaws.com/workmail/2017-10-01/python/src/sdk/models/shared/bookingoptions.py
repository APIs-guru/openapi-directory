from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BookingOptions:
    auto_accept_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoAcceptRequests' }})
    auto_decline_conflicting_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeclineConflictingRequests' }})
    auto_decline_recurring_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoDeclineRecurringRequests' }})
    
