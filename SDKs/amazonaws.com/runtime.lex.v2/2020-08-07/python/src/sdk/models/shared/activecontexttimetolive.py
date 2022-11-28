from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActiveContextTimeToLive:
    r"""ActiveContextTimeToLive
    The time that a context is active. You can specify the time to live in seconds or in conversation turns.
    """
    
    time_to_live_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLiveInSeconds') }})
    turns_to_live: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnsToLive') }})
    
