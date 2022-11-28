from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PullsListCommentsForReviewPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'review_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsListCommentsForReviewQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class PullsListCommentsForReviewRequest:
    path_params: PullsListCommentsForReviewPathParams = field()
    query_params: PullsListCommentsForReviewQueryParams = field()
    

@dataclass
class PullsListCommentsForReviewResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    review_comments: Optional[List[shared.ReviewComment]] = field(default=None)
    
