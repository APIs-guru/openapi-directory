from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import author_association_enum
from . import reaction_rollup
from . import simple_user


@dataclass_json
@dataclass
class PullRequestReviewCommentLinksHTML:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinksPullRequest:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinksSelf:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinks:
    html: PullRequestReviewCommentLinksHTML = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    pull_request: PullRequestReviewCommentLinksPullRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request' }})
    self: PullRequestReviewCommentLinksSelf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class PullRequestReviewComment:
    links: PullRequestReviewCommentLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
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
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    original_commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_commit_id' }})
    original_position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_position' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    pull_request_review_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_review_id' }})
    pull_request_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pull_request_url' }})
    reactions: Optional[reaction_rollup.ReactionRollup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reactions' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
