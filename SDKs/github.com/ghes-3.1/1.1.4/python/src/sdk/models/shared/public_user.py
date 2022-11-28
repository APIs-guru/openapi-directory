from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublicUserPlan:
    collaborators: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_repos: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_repos') }})
    space: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('space') }})
    

@dataclass_json
@dataclass
class PublicUser:
    r"""PublicUser
    Public User
    """
    
    avatar_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    bio: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bio') }})
    blog: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blog') }})
    company: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    followers_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following') }})
    following_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    hireable: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hireable') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    public_gists: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_gists') }})
    public_repos: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_repos') }})
    received_events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    collaborators: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborators') }})
    disk_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_usage') }})
    owned_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owned_private_repos') }})
    plan: Optional[PublicUserPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    private_gists: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_gists') }})
    suspended_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total_private_repos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_private_repos') }})
    twitter_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter_username') }})
    
