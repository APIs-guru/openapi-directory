from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PullsGetReviewPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = field(default=None, metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsGetReviewRequest:
    path_params: PullsGetReviewPathParams = field(default=None)
    

@dataclass
class PullsGetReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review: Optional[shared.PullRequestReview] = field(default=None)
    
