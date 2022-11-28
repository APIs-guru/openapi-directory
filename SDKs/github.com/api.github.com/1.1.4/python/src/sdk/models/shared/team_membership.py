from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TeamMembershipRoleEnum(str, Enum):
    MEMBER = "member"
    MAINTAINER = "maintainer"


@dataclass_json
@dataclass
class TeamMembership:
    r"""TeamMembership
    Team Membership
    """
    
    role: TeamMembershipRoleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
