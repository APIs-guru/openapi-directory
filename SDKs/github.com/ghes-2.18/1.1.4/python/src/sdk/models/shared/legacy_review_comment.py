from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LegacyReviewCommentLinksHTML:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LegacyReviewCommentLinksPullRequest:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LegacyReviewCommentLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class LegacyReviewCommentLinks:
    html: Optional[LegacyReviewCommentLinksHTML] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    pull_request: Optional[LegacyReviewCommentLinksPullRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request' }})
    self: Optional[LegacyReviewCommentLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class LegacyReviewCommentUser:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    followers_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followers_url' }})
    following_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'following_url' }})
    gists_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gists_url' }})
    gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gravatar_id' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organizations_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations_url' }})
    received_events_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received_events_url' }})
    repos_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    starred_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred_url' }})
    subscriptions_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions_url' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class LegacyReviewComment:
    links: Optional[LegacyReviewCommentLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    author_association: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    diff_hunk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_hunk' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_reply_to_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_reply_to_id' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    original_commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_commit_id' }})
    original_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_position' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    pull_request_review_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_review_id' }})
    pull_request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_url' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[LegacyReviewCommentUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
