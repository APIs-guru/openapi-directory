from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import link
from . import link
from . import link
from . import author_association_enum


@dataclass_json
@dataclass
class ReviewCommentLinks:
    html: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    pull_request: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request' }})
    self: link.Link = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class ReviewCommentSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"

class ReviewCommentStartSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class ReviewCommentUserSimpleUser:
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
class ReviewComment:
    links: ReviewCommentLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    author_association: author_association_enum.AuthorAssociationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_association' }})
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_html' }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_text' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diff_hunk: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diff_hunk' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_reply_to_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_reply_to_id' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    original_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_commit_id' }})
    original_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_line' }})
    original_position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_position' }})
    original_start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_start_line' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    pull_request_review_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_review_id' }})
    pull_request_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_url' }})
    side: Optional[ReviewCommentSideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'side' }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_line' }})
    start_side: Optional[ReviewCommentStartSideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_side' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: ReviewCommentUserSimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
