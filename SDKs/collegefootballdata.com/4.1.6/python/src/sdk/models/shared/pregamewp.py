from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PregameWp:
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayTeam') }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameId') }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeTeam') }})
    home_win_prob: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeWinProb') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    spread: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spread') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
