from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AppsCheckAuthorizationPathParams:
    access_token: str = field(default=None, metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsCheckAuthorizationRequest:
    path_params: AppsCheckAuthorizationPathParams = field(default=None)
    

@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationApp:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationScopedInstallation:
    account: shared.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    has_multiple_single_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_multiple_single_files' }})
    permissions: shared.AppPermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    repository_selection: AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_selection' }})
    single_file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file_name' }})
    single_file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_file_paths' }})
    

@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationSimpleUser:
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
class AppsCheckAuthorizationAuthorization:
    app: AppsCheckAuthorizationAuthorizationApp = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fingerprint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    hashed_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashed_token' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    installation: Optional[AppsCheckAuthorizationAuthorizationScopedInstallation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installation' }})
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    note_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note_url' }})
    scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    token_last_eight: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token_last_eight' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[AppsCheckAuthorizationAuthorizationSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class AppsCheckAuthorizationResponse:
    authorization: Optional[AppsCheckAuthorizationAuthorization] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
