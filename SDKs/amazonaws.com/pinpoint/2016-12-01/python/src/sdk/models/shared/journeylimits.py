from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JourneyLimits:
    r"""JourneyLimits
    Specifies limits on the messages that a journey can send and the number of times participants can enter a journey.
    """
    
    daily_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyCap') }})
    endpoint_reentry_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointReentryCap') }})
    endpoint_reentry_interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointReentryInterval') }})
    messages_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessagesPerSecond') }})
    
