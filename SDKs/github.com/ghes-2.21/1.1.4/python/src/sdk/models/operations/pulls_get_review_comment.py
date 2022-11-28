from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PullsGetReviewCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsGetReviewCommentRequest:
    path_params: PullsGetReviewCommentPathParams = field()
    

@dataclass
class PullsGetReviewCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review_comment: Optional[shared.PullRequestReviewComment] = field(default=None)
    
