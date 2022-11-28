from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JourneyPushMessage:
    r"""JourneyPushMessage
    Specifies the message configuration for a push notification that's sent to participants in a journey.
    """
    
    time_to_live: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLive') }})
    
