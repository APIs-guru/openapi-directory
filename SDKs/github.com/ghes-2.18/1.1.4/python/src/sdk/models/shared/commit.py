from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitSimpleUser:
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
class CommitCommitGitUser:
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class CommitCommitTree:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommitCommit:
    author: CommitCommitGitUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    comment_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment_count') }})
    committer: CommitCommitGitUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    tree: CommitCommitTree = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[Verification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclass
class CommitFiles:
    additions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    blob_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blob_url') }})
    changes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    contents_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents_url') }})
    deletions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    patch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch') }})
    previous_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_filename') }})
    raw_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('raw_url') }})
    sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class CommitParents:
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclass
class CommitStats:
    additions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    deletions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class Commit:
    r"""Commit
    Commit
    """
    
    author: CommitSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    commit: CommitCommit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    committer: CommitSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    parents: List[CommitParents] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    sha: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    files: Optional[List[CommitFiles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    stats: Optional[CommitStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    
