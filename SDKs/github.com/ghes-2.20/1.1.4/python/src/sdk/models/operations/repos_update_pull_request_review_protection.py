from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdatePullRequestReviewProtectionPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions:
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass_json
@dataclass
class ReposUpdatePullRequestReviewProtectionRequestBody:
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismiss_stale_reviews' }})
    dismissal_restrictions: Optional[ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_restrictions' }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_code_owner_reviews' }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_approving_review_count' }})
    

@dataclass
class ReposUpdatePullRequestReviewProtectionRequest:
    path_params: ReposUpdatePullRequestReviewProtectionPathParams = field(default=None)
    request: Optional[ReposUpdatePullRequestReviewProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdatePullRequestReviewProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protected_branch_pull_request_review: Optional[shared.ProtectedBranchPullRequestReview] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
