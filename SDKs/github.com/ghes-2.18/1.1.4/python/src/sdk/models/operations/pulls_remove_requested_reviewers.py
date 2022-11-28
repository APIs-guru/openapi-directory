from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsRemoveRequestedReviewersPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsRemoveRequestedReviewersRequestBody:
    reviewers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    team_reviewers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_reviewers') }})
    

@dataclass
class PullsRemoveRequestedReviewersRequest:
    path_params: PullsRemoveRequestedReviewersPathParams = field()
    request: Optional[PullsRemoveRequestedReviewersRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsRemoveRequestedReviewersResponse:
    content_type: str = field()
    status_code: int = field()
    pull_request_simple: Optional[shared.PullRequestSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
