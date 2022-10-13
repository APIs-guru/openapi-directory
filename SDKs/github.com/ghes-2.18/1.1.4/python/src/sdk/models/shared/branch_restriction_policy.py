from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BranchRestrictionPolicyAppsOwner:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    hooks_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_url' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issues_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    public_members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_members_url' }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyAppsPermissions:
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    issues: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    single_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyApps:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    external_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_url' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    owner: Optional[BranchRestrictionPolicyAppsOwner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    permissions: Optional[BranchRestrictionPolicyAppsPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyRestrictionsTeams:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parent: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyRestrictionsUsers:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyRestrictions:
    teams: Optional[List[BranchRestrictionPolicyRestrictionsTeams]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    users: Optional[List[BranchRestrictionPolicyRestrictionsUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    users_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyTeams:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicyUsers:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchRestrictionPolicy:
    apps: List[BranchRestrictionPolicyApps] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    apps_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps_url' }})
    restrictions: Optional[List[BranchRestrictionPolicyRestrictions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    teams: List[BranchRestrictionPolicyTeams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    teams_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    users: List[BranchRestrictionPolicyUsers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    users_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_url' }})
    
