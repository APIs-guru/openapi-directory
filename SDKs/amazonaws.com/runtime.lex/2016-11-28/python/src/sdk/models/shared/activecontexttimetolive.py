from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActiveContextTimeToLive:
    r"""ActiveContextTimeToLive
    The length of time or number of turns that a context remains active.
    """
    
    time_to_live_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLiveInSeconds') }})
    turns_to_live: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnsToLive') }})
    
