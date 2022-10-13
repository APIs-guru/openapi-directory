from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrganizationFullPlan:
    filled_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filled_seats' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_repos: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_repos' }})
    seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats' }})
    space: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'space' }})
    

@dataclass_json
@dataclass
class OrganizationFull:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_email' }})
    blog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blog' }})
    collaborators: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborators' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_repository_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_repository_permission' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk_usage' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers' }})
    following: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following' }})
    has_organization_projects: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_organization_projects' }})
    has_repository_projects: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_repository_projects' }})
    hooks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issues_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    members_allowed_repository_creation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_allowed_repository_creation_type' }})
    members_can_create_internal_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_internal_repositories' }})
    members_can_create_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_pages' }})
    members_can_create_private_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_private_pages' }})
    members_can_create_private_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_private_repositories' }})
    members_can_create_public_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_public_pages' }})
    members_can_create_public_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_public_repositories' }})
    members_can_create_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_can_create_repositories' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    owned_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owned_private_repos' }})
    plan: Optional[OrganizationFullPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    private_gists: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_gists' }})
    public_gists: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_gists' }})
    public_members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_members_url' }})
    public_repos: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_repos' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    total_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_private_repos' }})
    two_factor_requirement_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'two_factor_requirement_enabled' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
