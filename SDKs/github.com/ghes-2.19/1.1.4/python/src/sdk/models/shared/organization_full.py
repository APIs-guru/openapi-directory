from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationFullPlan:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_repos: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_repos') }})
    space: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    filled_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filled_seats') }})
    seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seats') }})
    

@dataclass_json
@dataclass
class OrganizationFull:
    r"""OrganizationFull
    Organization Full
    """
    
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    following: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    has_organization_projects: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_organization_projects') }})
    has_repository_projects: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_repository_projects') }})
    hooks_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooks_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    issues_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues_url') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    members_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    public_gists: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_gists') }})
    public_members_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_members_url') }})
    public_repos: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_repos') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_email') }})
    blog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    collaborators: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    default_repository_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_repository_permission') }})
    disk_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_usage') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    members_allowed_repository_creation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_allowed_repository_creation_type') }})
    members_can_create_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_pages') }})
    members_can_create_private_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_private_pages') }})
    members_can_create_public_pages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_public_pages') }})
    members_can_create_repositories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_can_create_repositories') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owned_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owned_private_repos') }})
    plan: Optional[OrganizationFullPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    private_gists: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_gists') }})
    total_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_private_repos') }})
    two_factor_requirement_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two_factor_requirement_enabled') }})
    
