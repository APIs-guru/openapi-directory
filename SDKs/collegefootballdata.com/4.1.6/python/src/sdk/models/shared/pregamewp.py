from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PregameWp:
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awayTeam' }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameId' }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeTeam' }})
    home_win_prob: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeWinProb' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonType' }})
    spread: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spread' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
