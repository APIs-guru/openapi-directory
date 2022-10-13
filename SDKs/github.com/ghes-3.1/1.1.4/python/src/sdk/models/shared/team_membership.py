from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class TeamMembershipRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"

class TeamMembershipStateEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"


@dataclass_json
@dataclass
class TeamMembership:
    role: TeamMembershipRoleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    state: TeamMembershipStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
