from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CoachSeasons:
    games: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('games') }})
    losses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('losses') }})
    postseason_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postseason_rank') }})
    preseason_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preseason_rank') }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school') }})
    sp_defense: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sp_defense') }})
    sp_offense: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sp_offense') }})
    sp_overall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sp_overall') }})
    srs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('srs') }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ties') }})
    wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wins') }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

@dataclass_json
@dataclass
class Coach:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    seasons: Optional[List[CoachSeasons]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasons') }})
    
