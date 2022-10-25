from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simple_user
from . import enterprise


@dataclass_json
@dataclass
class InstallationGhes2Permissions:
    checks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checks' }})
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    deployments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments' }})
    issues: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    organization_administration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_administration' }})
    pull_requests: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_requests' }})
    statuses: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    
class InstallationGhes2RepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class InstallationGhes2SimpleUser:
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
class InstallationGhes2:
    access_tokens_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_tokens_url' }})
    account: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    app_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_id' }})
    app_slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_slug' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_email' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    permissions: InstallationGhes2Permissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    repository_selection: InstallationGhes2RepositorySelectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    single_file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file_name' }})
    suspended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suspended_by: Optional[InstallationGhes2SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended_by' }})
    target_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_id' }})
    target_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_type' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
