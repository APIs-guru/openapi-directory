from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PageBuildError:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PageBuildSimpleUser:
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
class PageBuild:
    r"""PageBuild
    Page Build
    """
    
    commit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    error: PageBuildError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    pusher: PageBuildSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pusher') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
