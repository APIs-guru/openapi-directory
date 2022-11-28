from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayClock:
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    

@dataclass_json
@dataclass
class Play:
    away: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away') }})
    clock: Optional[PlayClock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clock') }})
    defense: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    defense_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense_conference') }})
    defense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense_score') }})
    defense_timeouts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense_timeouts') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down') }})
    drive_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_id') }})
    drive_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_number') }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('game_id') }})
    home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    offense: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    offense_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense_conference') }})
    offense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense_score') }})
    offense_timeouts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense_timeouts') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    play_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_number') }})
    play_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_text') }})
    play_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('play_type') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    scoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoring') }})
    wallclock: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wallclock') }})
    yard_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yard_line') }})
    yards_gained: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yards_gained') }})
    yards_to_goal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yards_to_goal') }})
    
