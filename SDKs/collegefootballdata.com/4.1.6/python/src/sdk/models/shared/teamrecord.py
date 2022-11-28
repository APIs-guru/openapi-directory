from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamRecordAwayGames:
    games: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games') }})
    losses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    

@dataclass_json
@dataclass
class TeamRecordConferenceGames:
    games: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games') }})
    losses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    

@dataclass_json
@dataclass
class TeamRecordHomeGames:
    games: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games') }})
    losses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    

@dataclass_json
@dataclass
class TeamRecordTotal:
    games: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games') }})
    losses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    

@dataclass_json
@dataclass
class TeamRecord:
    away_games: Optional[TeamRecordAwayGames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayGames') }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    conference_games: Optional[TeamRecordConferenceGames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceGames') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    home_games: Optional[TeamRecordHomeGames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeGames') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    total: Optional[TeamRecordTotal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
