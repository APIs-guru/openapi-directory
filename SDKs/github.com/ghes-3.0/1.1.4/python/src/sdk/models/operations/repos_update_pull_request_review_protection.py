from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdatePullRequestReviewProtectionPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions:
    r"""ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
    Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
    """
    
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclass
class ReposUpdatePullRequestReviewProtectionRequestBody:
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclass
class ReposUpdatePullRequestReviewProtectionRequest:
    path_params: ReposUpdatePullRequestReviewProtectionPathParams = field()
    request: Optional[ReposUpdatePullRequestReviewProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdatePullRequestReviewProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    protected_branch_pull_request_review: Optional[shared.ProtectedBranchPullRequestReview] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
