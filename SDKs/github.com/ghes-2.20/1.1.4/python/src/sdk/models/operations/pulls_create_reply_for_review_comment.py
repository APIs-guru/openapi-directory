from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsCreateReplyForReviewCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateReplyForReviewCommentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class PullsCreateReplyForReviewCommentRequest:
    path_params: PullsCreateReplyForReviewCommentPathParams = field()
    request: Optional[PullsCreateReplyForReviewCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateReplyForReviewCommentResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review_comment: Optional[shared.PullRequestReviewComment] = field(default=None)
    
