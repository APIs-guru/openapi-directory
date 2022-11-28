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
class PullRequestReviewCommentLinksHTML:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinksPullRequest:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinksSelf:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class PullRequestReviewCommentLinks:
    html: PullRequestReviewCommentLinksHTML = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    pull_request: PullRequestReviewCommentLinksPullRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request') }})
    self: PullRequestReviewCommentLinksSelf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class PullRequestReviewComment:
    r"""PullRequestReviewComment
    Pull Request Review Comments are comments on a portion of the Pull Request's diff.
    """
    
    links: PullRequestReviewCommentLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
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
    user: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    body_html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_html') }})
    body_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_text') }})
    in_reply_to_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to_id') }})
    reactions: Optional[ReactionRollup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    
