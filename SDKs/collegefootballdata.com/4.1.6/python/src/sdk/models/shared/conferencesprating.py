from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConferenceSpRatingDefenseHavoc:
    db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db' }})
    front_seven: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frontSeven' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ConferenceSpRatingDefense:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explosiveness' }})
    havoc: Optional[ConferenceSpRatingDefenseHavoc] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'havoc' }})
    pasing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pasing' }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passingDowns' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDowns' }})
    success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass_json
@dataclass
class ConferenceSpRatingOffense:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explosiveness' }})
    pace: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pace' }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passingDowns' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    run_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runRate' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDowns' }})
    success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass_json
@dataclass
class ConferenceSpRatingSpecialTeams:
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    

@dataclass_json
@dataclass
class ConferenceSpRating:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    defense: Optional[ConferenceSpRatingDefense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defense' }})
    offense: Optional[ConferenceSpRatingOffense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offense' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    second_order_wins: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondOrderWins' }})
    sos: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sos' }})
    special_teams: Optional[ConferenceSpRatingSpecialTeams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialTeams' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
