from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayStatClock:
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    

@dataclass_json
@dataclass
class PlayStat:
    athlete_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('athleteId') }})
    athlete_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('athleteName') }})
    clock: Optional[PlayStatClock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clock') }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down') }})
    drive_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameId') }})
    opponent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opponent') }})
    opponent_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opponentScore') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    play_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playId') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    stat: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    stat_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statType') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    team_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamScore') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    yards_to_goal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yardsToGoal') }})
    
