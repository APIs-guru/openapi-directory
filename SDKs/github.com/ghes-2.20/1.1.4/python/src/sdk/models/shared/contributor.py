from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Contributor:
    r"""Contributor
    Contributor
    """
    
    contributions: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributions') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers_url') }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('following_url') }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gists_url') }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gravatar_id') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations_url') }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('received_events_url') }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_url') }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_admin') }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred_url') }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptions_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
