from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayWp:
    away: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away') }})
    away_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayId') }})
    away_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayScore') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('down') }})
    games_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gamesId') }})
    home: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home') }})
    home_ball: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeBall') }})
    home_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeId') }})
    home_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeScore') }})
    home_win_prob: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeWinProb') }})
    play_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playId') }})
    play_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playNumber') }})
    play_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playText') }})
    spread: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spread') }})
    time_remaining: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRemaining') }})
    yard_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yardLine') }})
    
