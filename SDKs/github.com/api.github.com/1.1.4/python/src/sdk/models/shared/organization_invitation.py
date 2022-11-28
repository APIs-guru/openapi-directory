from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationInvitation:
    r"""OrganizationInvitation
    Organization Invitation
    """
    
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invitation_team_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitation_team_url') }})
    inviter: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('inviter') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_count') }})
    failed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_at') }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed_reason') }})
    invitation_teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invitation_teams_url') }})
    
