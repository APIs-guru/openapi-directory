from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsRequestReviewersPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsRequestReviewersRequestBody:
    reviewers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewers' }})
    team_reviewers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_reviewers' }})
    

@dataclass
class PullsRequestReviewersRequest:
    path_params: PullsRequestReviewersPathParams = field(default=None)
    request: Optional[PullsRequestReviewersRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsRequestReviewersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_simple: Optional[shared.PullRequestSimple] = field(default=None)
    
