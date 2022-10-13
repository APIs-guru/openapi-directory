from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GamePpaDefense:
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDown' }})
    overall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondDown' }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdDown' }})
    

@dataclass_json
@dataclass
class GamePpaOffense:
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstDown' }})
    overall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondDown' }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thirdDown' }})
    

@dataclass_json
@dataclass
class GamePpa:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    defense: Optional[GamePpaDefense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defense' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    offense: Optional[GamePpaOffense] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offense' }})
    opponnent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opponnent' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
