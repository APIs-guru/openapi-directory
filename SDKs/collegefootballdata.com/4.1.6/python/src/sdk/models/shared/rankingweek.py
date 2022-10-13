from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RankingWeekPollsRanks:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    first_place_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstPlaceVotes' }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    

@dataclass_json
@dataclass
class RankingWeekPolls:
    poll: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poll' }})
    ranks: Optional[List[RankingWeekPollsRanks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranks' }})
    

@dataclass_json
@dataclass
class RankingWeek:
    polls: Optional[List[RankingWeekPolls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'polls' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonType' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
