from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayMediaControlActivity:
    play_elapsed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playElapsed' }})
    play_elapsed_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playElapsedInterval' }})
    play_paused: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playPaused' }})
    
