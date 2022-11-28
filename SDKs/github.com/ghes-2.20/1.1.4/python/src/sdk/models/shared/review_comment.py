from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReviewCommentLinks:
    html: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    pull_request: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request') }})
    self: Link = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    
class ReviewCommentSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"

class ReviewCommentStartSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"


@dataclass_json
@dataclass
class ReviewCommentSimpleUser:
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
class ReviewComment:
    r"""ReviewComment
    Legacy Review Comment
    """
    
    links: ReviewCommentLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    author_association: AuthorAssociationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_association') }})
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diff_hunk: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff_hunk') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    original_commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_commit_id') }})
    original_position: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_position') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    position: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    pull_request_review_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_review_id') }})
    pull_request_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_url') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: ReviewCommentSimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    in_reply_to_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to_id') }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    original_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_line') }})
    original_start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_start_line') }})
    side: Optional[ReviewCommentSideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('side') }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    start_side: Optional[ReviewCommentStartSideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_side') }})
    
