from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssueEventSimpleUser:
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
class IssueEvent:
    r"""IssueEvent
    Issue Event
    """
    
    actor: IssueEventSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    commit_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_url') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    assignee: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    assigner: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assigner') }})
    author_association: Optional[AuthorAssociationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    dismissed_review: Optional[IssueEventDismissedReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissed_review') }})
    issue: Optional[IssueSimple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue') }})
    label: Optional[IssueEventLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    lock_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_reason') }})
    milestone: Optional[IssueEventMilestone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('milestone') }})
    performed_via_github_app: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performed_via_github_app') }})
    project_card: Optional[IssueEventProjectCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_card') }})
    rename: Optional[IssueEventRename] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rename') }})
    requested_reviewer: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_reviewer') }})
    requested_team: Optional[Team] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_team') }})
    review_requester: Optional[IssueEventSimpleUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('review_requester') }})
    
