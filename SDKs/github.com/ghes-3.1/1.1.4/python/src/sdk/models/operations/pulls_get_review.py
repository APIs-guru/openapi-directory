from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PullsGetReviewPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsGetReviewRequest:
    path_params: PullsGetReviewPathParams = field()
    

@dataclass
class PullsGetReviewResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review: Optional[shared.PullRequestReview] = field(default=None)
    
