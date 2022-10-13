from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class TeamMembershipRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamMembership:
    role: TeamMembershipRoleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
