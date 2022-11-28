from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputContext:
    r"""OutputContext
    The specification of an output context that is set when an intent is fulfilled.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    time_to_live_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeToLiveInSeconds') }})
    turns_to_live: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('turnsToLive') }})
    
