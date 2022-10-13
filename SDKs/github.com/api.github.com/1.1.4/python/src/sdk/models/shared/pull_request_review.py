from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import author_association_enum


@dataclass_json
@dataclass
class PullRequestReviewLinksHTML:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PullRequestReviewLinksPullRequest:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PullRequestReviewLinks:
    html: PullRequestReviewLinksHTML = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    pull_request: PullRequestReviewLinksPullRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request' }})
    

@dataclass_json
@dataclass
class PullRequestReviewUserSimpleUser:
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
class PullRequestReview:
    links: PullRequestReviewLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    author_association: author_association_enum.AuthorAssociationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_html' }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_text' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    pull_request_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_url' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    submitted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: PullRequestReviewUserSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
