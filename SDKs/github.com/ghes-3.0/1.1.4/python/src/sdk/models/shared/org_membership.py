from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrgMembershipPermissions:
    can_create_repository: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_create_repository') }})
    
class OrgMembershipRoleEnum(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"
    BILLING_MANAGER = "billing_manager"

class OrgMembershipStateEnum(str, Enum):
    ACTIVE = "active"
    PENDING = "pending"


@dataclass_json
@dataclass
class OrgMembershipSimpleUser:
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_at') }})
    

@dataclass_json
@dataclass
class OrgMembership:
    r"""OrgMembership
    Org Membership
    """
    
    organization: OrganizationSimple = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    organization_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_url') }})
    role: OrgMembershipRoleEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: OrgMembershipStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: OrgMembershipSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    permissions: Optional[OrgMembershipPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
