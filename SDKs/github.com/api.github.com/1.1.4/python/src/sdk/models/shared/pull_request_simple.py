from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import link
from . import simple_user
from . import author_association_enum
from . import auto_merge
from . import repository
from . import repository
from . import simple_user
from . import team_simple


@dataclass_json
@dataclass
class PullRequestSimpleLinks:
    comments: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    commits: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    html: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    issue: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    review_comment: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comment' }})
    review_comments: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comments' }})
    self: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    statuses: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses' }})
    

@dataclass_json
@dataclass
class PullRequestSimpleSimpleUser:
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
class PullRequestSimpleBaseSimpleUser:
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
class PullRequestSimpleBase:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: repository.Repository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    user: PullRequestSimpleBaseSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class PullRequestSimpleHeadSimpleUser:
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
class PullRequestSimpleHead:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ref' }})
    repo: repository.Repository = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repo' }})
    sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha' }})
    user: PullRequestSimpleHeadSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class PullRequestSimpleLabels:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestSimpleMilestoneSimpleUser:
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
    
class PullRequestSimpleMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class PullRequestSimpleMilestone:
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_issues' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: PullRequestSimpleMilestoneSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    due_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    state: PullRequestSimpleMilestoneStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PullRequestSimple:
    links: PullRequestSimpleLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    active_lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_lock_reason' }})
    assignee: PullRequestSimpleSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignees: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    author_association: author_association_enum.AuthorAssociationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    auto_merge: auto_merge.AutoMerge = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_merge' }})
    base: PullRequestSimpleBase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    commits_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diff_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_url' }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    head: PullRequestSimpleHead = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_url' }})
    labels: List[PullRequestSimpleLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    merge_commit_sha: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merge_commit_sha' }})
    merged_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    milestone: PullRequestSimpleMilestone = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    patch_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch_url' }})
    requested_reviewers: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_reviewers' }})
    requested_teams: Optional[List[team_simple.TeamSimple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_teams' }})
    review_comment_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comment_url' }})
    review_comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_comments_url' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    statuses_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statuses_url' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: PullRequestSimpleSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
