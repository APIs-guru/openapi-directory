from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import team
from . import simple_user
from . import status_check_policy
from . import branch_restriction_policy


@dataclass_json
@dataclass
class ProtectedBranchAllowDeletions:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class ProtectedBranchAllowForcePushes:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class ProtectedBranchEnforceAdmins:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredLinearHistory:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions:
    teams: List[team.Team] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    teams_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    users: List[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    users_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users_url' }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredPullRequestReviews:
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismiss_stale_reviews' }})
    dismissal_restrictions: Optional[ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dismissal_restrictions' }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_code_owner_reviews' }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_approving_review_count' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredSignatures:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ProtectedBranch:
    allow_deletions: Optional[ProtectedBranchAllowDeletions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_deletions' }})
    allow_force_pushes: Optional[ProtectedBranchAllowForcePushes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_force_pushes' }})
    enforce_admins: Optional[ProtectedBranchEnforceAdmins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce_admins' }})
    required_linear_history: Optional[ProtectedBranchRequiredLinearHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_linear_history' }})
    required_pull_request_reviews: Optional[ProtectedBranchRequiredPullRequestReviews] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_pull_request_reviews' }})
    required_signatures: Optional[ProtectedBranchRequiredSignatures] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_signatures' }})
    required_status_checks: Optional[status_check_policy.StatusCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_status_checks' }})
    restrictions: Optional[branch_restriction_policy.BranchRestrictionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
