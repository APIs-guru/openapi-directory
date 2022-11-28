from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GameLinesLines:
    away_moneyline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayMoneyline') }})
    formatted_spread: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedSpread') }})
    home_moneyline: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeMoneyline') }})
    over_under: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overUnder') }})
    over_under_open: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overUnderOpen') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    spread: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spread') }})
    spread_open: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadOpen') }})
    

@dataclass_json
@dataclass
class GameLines:
    away_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayConference') }})
    away_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayScore') }})
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayTeam') }})
    home_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeConference') }})
    home_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeScore') }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeTeam') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lines: Optional[List[GameLinesLines]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
