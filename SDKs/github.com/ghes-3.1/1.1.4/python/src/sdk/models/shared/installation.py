from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstallationPermissions:
    checks: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    deployments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployments') }})
    issues: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    organization_administration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_administration') }})
    pull_requests: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_requests') }})
    statuses: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
class InstallationRepositorySelectionEnum(str, Enum):
    ALL = "all"
    SELECTED = "selected"


@dataclass_json
@dataclass
class InstallationSimpleUser:
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
class Installation:
    r"""Installation
    Installation
    """
    
    access_tokens_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_tokens_url') }})
    account: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    app_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_id') }})
    app_slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('app_slug') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    permissions: InstallationPermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    repositories_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    repository_selection: InstallationRepositorySelectionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_selection') }})
    single_file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_name') }})
    suspended_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    suspended_by: InstallationSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended_by') }})
    target_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_id') }})
    target_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_type') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    has_multiple_single_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_multiple_single_files') }})
    single_file_paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('single_file_paths') }})
    
