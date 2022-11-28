from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GameMedia:
    away_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayConference') }})
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayTeam') }})
    home_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeConference') }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeTeam') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_start_time_tbd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStartTimeTBD') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    outlet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlet') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
