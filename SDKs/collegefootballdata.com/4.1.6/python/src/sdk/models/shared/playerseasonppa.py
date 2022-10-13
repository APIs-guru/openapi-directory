from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerSeasonPpaAveragePpa:
    all: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDown' }})
    pass_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pass' }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passingDowns' }})
    rush: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rush' }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondDown' }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDowns' }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdDown' }})
    

@dataclass_json
@dataclass
class PlayerSeasonPpaTotalPpa:
    all: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all' }})
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDown' }})
    pass_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pass' }})
    passing_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passingDowns' }})
    rush: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rush' }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondDown' }})
    standard_downs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDowns' }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdDown' }})
    

@dataclass_json
@dataclass
class PlayerSeasonPpa:
    average_ppa: Optional[PlayerSeasonPpaAveragePpa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averagePPA' }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    total_ppa: Optional[PlayerSeasonPpaTotalPpa] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPPA' }})
    
