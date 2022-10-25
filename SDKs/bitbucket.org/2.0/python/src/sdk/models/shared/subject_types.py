from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubjectTypesRepositoryLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesRepository:
    events: Optional[SubjectTypesRepositoryLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypesTeamLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesTeam:
    events: Optional[SubjectTypesTeamLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypesUserLink:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class SubjectTypesUser:
    events: Optional[SubjectTypesUserLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    

@dataclass_json
@dataclass
class SubjectTypes:
    repository: Optional[SubjectTypesRepository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    team: Optional[SubjectTypesTeam] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    user: Optional[SubjectTypesUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
