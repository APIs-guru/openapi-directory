from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsSubmitReviewPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = field(default=None, metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    
class PullsSubmitReviewRequestBodyEventEnum(str, Enum):
    APPROVE = "APPROVE"
    REQUEST_CHANGES = "REQUEST_CHANGES"
    COMMENT = "COMMENT"


@dataclass_json
@dataclass
class PullsSubmitReviewRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    event: PullsSubmitReviewRequestBodyEventEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    

@dataclass
class PullsSubmitReviewRequest:
    path_params: PullsSubmitReviewPathParams = field(default=None)
    request: Optional[PullsSubmitReviewRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsSubmitReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review: Optional[shared.PullRequestReview] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
