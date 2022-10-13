from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerGameTeamsCategoriesTypesAthletes:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    

@dataclass_json
@dataclass
class PlayerGameTeamsCategoriesTypes:
    athletes: Optional[List[PlayerGameTeamsCategoriesTypesAthletes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'athletes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PlayerGameTeamsCategories:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    types: Optional[List[PlayerGameTeamsCategoriesTypes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    

@dataclass_json
@dataclass
class PlayerGameTeamsSchool:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PlayerGameTeams:
    categories: Optional[List[PlayerGameTeamsCategories]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    home_away: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeAway' }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    school: Optional[PlayerGameTeamsSchool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    

@dataclass_json
@dataclass
class PlayerGame:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    teams: Optional[List[PlayerGameTeams]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    
