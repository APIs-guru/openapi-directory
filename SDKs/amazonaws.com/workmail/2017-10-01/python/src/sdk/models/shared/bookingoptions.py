from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BookingOptions:
    r"""BookingOptions
    At least one delegate must be associated to the resource to disable automatic replies from the resource.
    """
    
    auto_accept_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoAcceptRequests') }})
    auto_decline_conflicting_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoDeclineConflictingRequests') }})
    auto_decline_recurring_requests: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoDeclineRecurringRequests') }})
    
