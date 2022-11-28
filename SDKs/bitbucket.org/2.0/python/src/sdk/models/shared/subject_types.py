from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubjectTypesRepositoryLink:
    r"""SubjectTypesRepositoryLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class SubjectTypesRepository:
    events: Optional[SubjectTypesRepositoryLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclass
class SubjectTypesTeamLink:
    r"""SubjectTypesTeamLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class SubjectTypesTeam:
    events: Optional[SubjectTypesTeamLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclass
class SubjectTypesUserLink:
    r"""SubjectTypesUserLink
    A link to a resource related to this object.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class SubjectTypesUser:
    events: Optional[SubjectTypesUserLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    

@dataclass_json
@dataclass
class SubjectTypes:
    r"""SubjectTypes
    The mapping of resource/subject types pointing to their individual event types.
    """
    
    repository: Optional[SubjectTypesRepository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    team: Optional[SubjectTypesTeam] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    user: Optional[SubjectTypesUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
