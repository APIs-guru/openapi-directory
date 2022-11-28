from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AppsCheckAuthorizationPathParams:
    access_token: str = field(metadata={'path_param': { 'field_name': 'access_token', 'style': 'simple', 'explode': False }})
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationApp:
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationScopedInstallation:
    account: shared.SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    permissions: shared.AppPermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    repository_selection: AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    single_file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_name') }})
    has_multiple_single_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_multiple_single_files') }})
    single_file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_paths') }})
    

@dataclass_json
@dataclass
class AppsCheckAuthorizationAuthorizationSimpleUser:
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
class AppsCheckAuthorizationAuthorization:
    app: AppsCheckAuthorizationAuthorizationApp = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fingerprint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    hashed_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashed_token') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    note: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    token_last_eight: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_last_eight') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    installation: Optional[AppsCheckAuthorizationAuthorizationScopedInstallation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    user: Optional[AppsCheckAuthorizationAuthorizationSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass
class AppsCheckAuthorizationRequest:
    path_params: AppsCheckAuthorizationPathParams = field()
    

@dataclass
class AppsCheckAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    authorization: Optional[AppsCheckAuthorizationAuthorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
