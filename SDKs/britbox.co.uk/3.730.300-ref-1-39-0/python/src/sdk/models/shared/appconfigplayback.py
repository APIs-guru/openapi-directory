from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppConfigPlayback:
    chain_play_countdown: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chainPlayCountdown' }})
    chain_play_squeezeback: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chainPlaySqueezeback' }})
    chain_play_timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chainPlayTimeout' }})
    heartbeat_frequency: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heartbeatFrequency' }})
    view_event_points: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewEventPoints' }})
    
