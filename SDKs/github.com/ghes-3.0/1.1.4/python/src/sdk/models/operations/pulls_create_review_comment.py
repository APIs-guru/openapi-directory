from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsCreateReviewCommentPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsCreateReviewCommentRequestBodySideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"

class PullsCreateReviewCommentRequestBodyStartSideEnum(str, Enum):
    LEFT = "LEFT"
    RIGHT = "RIGHT"
    SIDE = "side"


@dataclass_json
@dataclass
class PullsCreateReviewCommentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit_id') }})
    in_reply_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to') }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    side: Optional[PullsCreateReviewCommentRequestBodySideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('side') }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_line') }})
    start_side: Optional[PullsCreateReviewCommentRequestBodyStartSideEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_side') }})
    

@dataclass
class PullsCreateReviewCommentRequest:
    path_params: PullsCreateReviewCommentPathParams = field()
    request: Optional[PullsCreateReviewCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateReviewCommentResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review_comment: Optional[shared.PullRequestReviewComment] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
