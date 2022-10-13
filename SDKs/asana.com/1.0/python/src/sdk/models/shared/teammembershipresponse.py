from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import teamcompact
from . import usercompact


@dataclass_json
@dataclass
class TeamMembershipResponse:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    is_guest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_guest' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    team: Optional[teamcompact.TeamCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
