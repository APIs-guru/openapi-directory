from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamSpRatingDefenseHavoc:
    db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class TeamSpRatingDefense:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    havoc: Optional[TeamSpRatingDefenseHavoc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    pasing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pasing') }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    ranking: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclass
class TeamSpRatingOffense:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    pace: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pace') }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    ranking: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    run_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runRate') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass_json
@dataclass
class TeamSpRatingSpecialTeams:
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    

@dataclass_json
@dataclass
class TeamSpRating:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[TeamSpRatingDefense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[TeamSpRatingOffense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    ranking: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    second_order_wins: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondOrderWins') }})
    sos: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sos') }})
    special_teams: Optional[TeamSpRatingSpecialTeams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialTeams') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
