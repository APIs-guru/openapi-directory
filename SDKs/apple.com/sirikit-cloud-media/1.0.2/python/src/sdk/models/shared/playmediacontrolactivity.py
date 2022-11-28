from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayMediaControlActivity:
    play_elapsed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playElapsed') }})
    play_elapsed_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playElapsedInterval') }})
    play_paused: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playPaused') }})
    
