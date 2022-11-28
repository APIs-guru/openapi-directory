from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamGameTeamsStats:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stat') }})
    

@dataclass_json
@dataclass
class TeamGameTeams:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    home_away: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeAway') }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school') }})
    stats: Optional[List[TeamGameTeamsStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    

@dataclass_json
@dataclass
class TeamGame:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    teams: Optional[List[TeamGameTeams]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    
