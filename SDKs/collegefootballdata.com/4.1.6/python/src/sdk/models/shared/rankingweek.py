from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RankingWeekPollsRanks:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    first_place_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstPlaceVotes') }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school') }})
    

@dataclass_json
@dataclass
class RankingWeekPolls:
    poll: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poll') }})
    ranks: Optional[List[RankingWeekPollsRanks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranks') }})
    

@dataclass_json
@dataclass
class RankingWeek:
    polls: Optional[List[RankingWeekPolls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polls') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
