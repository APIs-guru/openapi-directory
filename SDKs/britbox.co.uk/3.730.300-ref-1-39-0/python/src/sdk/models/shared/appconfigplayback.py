from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AppConfigPlayback:
    chain_play_countdown: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chainPlayCountdown') }})
    chain_play_squeezeback: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chainPlaySqueezeback') }})
    chain_play_timeout: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chainPlayTimeout') }})
    heartbeat_frequency: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('heartbeatFrequency') }})
    view_event_points: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewEventPoints') }})
    
