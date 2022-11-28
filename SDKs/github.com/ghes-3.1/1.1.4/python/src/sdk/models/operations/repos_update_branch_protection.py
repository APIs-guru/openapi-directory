from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateBranchProtectionPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions
    Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
    """
    
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews
    Require at least one approving review on a pull request, before merging. Set to `null` to disable.
    """
    
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks:
    r"""ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks
    Require status checks to pass before merging. Set to `null` to disable.
    """
    
    contexts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    strict: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRestrictions:
    r"""ReposUpdateBranchProtectionRequestBodyRestrictions
    Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
    """
    
    teams: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    users: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBody:
    enforce_admins: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    required_pull_request_reviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_status_checks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    allow_deletions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    required_linear_history: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtection415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReposUpdateBranchProtectionRequest:
    path_params: ReposUpdateBranchProtectionPathParams = field()
    request: Optional[ReposUpdateBranchProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateBranchProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    protected_branch: Optional[shared.ProtectedBranch] = field(default=None)
    repos_update_branch_protection_415_application_json_object: Optional[ReposUpdateBranchProtection415ApplicationJSON] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
