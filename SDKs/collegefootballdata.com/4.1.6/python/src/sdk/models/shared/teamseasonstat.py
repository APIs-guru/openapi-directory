from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamSeasonStat:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    stat_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statName') }})
    stat_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statValue') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
