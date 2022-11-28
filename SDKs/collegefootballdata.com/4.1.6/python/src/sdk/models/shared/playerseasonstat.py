from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayerSeasonStat:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    player: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    player_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerId') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    stat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    stat_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statType') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
