from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubjectTypesRepositoryEventsLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesRepository:
    events: Optional[SubjectTypesRepositoryEventsLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypesTeamEventsLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesTeam:
    events: Optional[SubjectTypesTeamEventsLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypesUserEventsLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesUser:
    events: Optional[SubjectTypesUserEventsLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypes:
    repository: Optional[SubjectTypesRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    team: Optional[SubjectTypesTeam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    user: Optional[SubjectTypesUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
