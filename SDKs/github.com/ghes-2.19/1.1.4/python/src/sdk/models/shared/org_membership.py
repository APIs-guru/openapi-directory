from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organization_simple


@dataclass_json
@dataclass
class OrgMembershipPermissions:
    can_create_repository: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'can_create_repository' }})
    
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
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_at' }})
    starred_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class OrgMembership:
    organization: organization_simple.OrganizationSimple = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    organization_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_url' }})
    permissions: Optional[OrgMembershipPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    role: OrgMembershipRoleEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    state: OrgMembershipStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: OrgMembershipSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
