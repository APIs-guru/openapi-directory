from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateBranchProtectionPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions:
    teams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    users: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews:
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismiss_stale_reviews' }})
    dismissal_restrictions: Optional[ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_restrictions' }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_code_owner_reviews' }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_approving_review_count' }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks:
    contexts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    strict: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strict' }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBodyRestrictions:
    apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    teams: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    users: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtectionRequestBody:
    allow_deletions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_deletions' }})
    allow_force_pushes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_force_pushes' }})
    enforce_admins: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce_admins' }})
    required_linear_history: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_linear_history' }})
    required_pull_request_reviews: ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_pull_request_reviews' }})
    required_status_checks: ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_status_checks' }})
    restrictions: ReposUpdateBranchProtectionRequestBodyRestrictions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    

@dataclass
class ReposUpdateBranchProtectionRequest:
    path_params: ReposUpdateBranchProtectionPathParams = field(default=None)
    request: Optional[ReposUpdateBranchProtectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class ReposUpdateBranchProtection415ApplicationJSON:
    documentation_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ReposUpdateBranchProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    protected_branch: Optional[shared.ProtectedBranch] = field(default=None)
    repos_update_branch_protection_415_application_json_object: Optional[ReposUpdateBranchProtection415ApplicationJSON] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
