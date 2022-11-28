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
class IssueSimpleUser:
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
class IssueLabels2:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class IssueMilestoneSimpleUser:
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
    
class IssueMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class IssueMilestone:
    closed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_issues') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: IssueMilestoneSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    due_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    open_issues: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('open_issues') }})
    state: IssueMilestoneStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class IssuePullRequest:
    diff_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    patch_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patch_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    merged_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merged_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class Issue:
    r"""Issue
    Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
    """
    
    assignee: IssueSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    author_association: AuthorAssociationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    closed_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    comments_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments_url') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('events_url') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    labels_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels_url') }})
    locked: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    milestone: IssueMilestone = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    repository_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository_url') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: IssueSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    active_lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active_lock_reason') }})
    assignees: Optional[List[SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignees') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    closed_by: Optional[IssueSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_by') }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performed_via_github_app') }})
    pull_request: Optional[IssuePullRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request') }})
    reactions: Optional[ReactionRollup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    repository: Optional[Repository] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    timeline_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline_url') }})
    
