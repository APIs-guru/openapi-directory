from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simple_user
from . import author_association_enum
from . import repository
from . import search_result_text_matches


@dataclass_json
@dataclass
class IssueSearchResultItemAssigneeSimpleUser:
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
class IssueSearchResultItemLabels:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class IssueSearchResultItemMilestoneCreatorSimpleUser:
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
    
class IssueSearchResultItemMilestoneStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"


@dataclass_json
@dataclass
class IssueSearchResultItemMilestoneMilestone:
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_issues' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator: IssueSearchResultItemMilestoneCreatorSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    due_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    open_issues: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open_issues' }})
    state: IssueSearchResultItemMilestoneStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class IssueSearchResultItemPullRequest:
    diff_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    merged_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merged_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    patch_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class IssueSearchResultItemUserSimpleUser:
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
class IssueSearchResultItem:
    active_lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_lock_reason' }})
    assignee: IssueSearchResultItemAssigneeSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assignees: Optional[List[simple_user.SimpleUser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    author_association: author_association_enum.AuthorAssociationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_html' }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_text' }})
    closed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    comments_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    draft: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'draft' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    labels: List[IssueSearchResultItemLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    labels_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels_url' }})
    locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    milestone: IssueSearchResultItemMilestoneMilestone = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performed_via_github_app' }})
    pull_request: Optional[IssueSearchResultItemPullRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request' }})
    repository: Optional[repository.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository' }})
    repository_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repository_url' }})
    score: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    text_matches: Optional[List[search_result_text_matches.SearchResultTextMatches]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text_matches' }})
    timeline_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeline_url' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: IssueSearchResultItemUserSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
