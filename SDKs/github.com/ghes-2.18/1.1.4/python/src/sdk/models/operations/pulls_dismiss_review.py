from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsDismissReviewPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsDismissReviewRequestBody:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    

@dataclass
class PullsDismissReviewRequest:
    path_params: PullsDismissReviewPathParams = field()
    request: Optional[PullsDismissReviewRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsDismissReviewResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review: Optional[shared.PullRequestReview] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
