from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import author_association_enum
from . import issue_event_dismissed_review
from . import issue_simple
from . import issue_event_label
from . import issue_event_milestone
from . import issue_event_project_card
from . import issue_event_rename
from . import team


@dataclass_json
@dataclass
class IssueEventSimpleUser:
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
class IssueEvent:
    actor: IssueEventSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    assignee: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    assigner: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigner' }})
    author_association: Optional[author_association_enum.AuthorAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    commit_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dismissed_review: Optional[issue_event_dismissed_review.IssueEventDismissedReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissed_review' }})
    event: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issue: Optional[issue_simple.IssueSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    label: Optional[issue_event_label.IssueEventLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lock_reason' }})
    milestone: Optional[issue_event_milestone.IssueEventMilestone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'milestone' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performed_via_github_app' }})
    project_card: Optional[issue_event_project_card.IssueEventProjectCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project_card' }})
    rename: Optional[issue_event_rename.IssueEventRename] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rename' }})
    requested_reviewer: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_reviewer' }})
    requested_team: Optional[team.Team] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_team' }})
    review_requester: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'review_requester' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
