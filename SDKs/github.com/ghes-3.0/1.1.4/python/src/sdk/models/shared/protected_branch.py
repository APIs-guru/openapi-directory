from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProtectedBranchAllowDeletions:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class ProtectedBranchAllowForcePushes:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class ProtectedBranchEnforceAdmins:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredConversationResolution:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredLinearHistory:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions:
    teams: List[Team] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    teams_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams_url') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    users: List[SimpleUser] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    users_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users_url') }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredPullRequestReviews:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    dismiss_stale_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismiss_stale_reviews') }})
    dismissal_restrictions: Optional[ProtectedBranchRequiredPullRequestReviewsDismissalRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dismissal_restrictions') }})
    require_code_owner_reviews: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_code_owner_reviews') }})
    required_approving_review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_approving_review_count') }})
    

@dataclass_json
@dataclass
class ProtectedBranchRequiredSignatures:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ProtectedBranch:
    r"""ProtectedBranch
    Branch protections protect branches
    """
    
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    allow_deletions: Optional[ProtectedBranchAllowDeletions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[ProtectedBranchAllowForcePushes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    enforce_admins: Optional[ProtectedBranchEnforceAdmins] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    required_conversation_resolution: Optional[ProtectedBranchRequiredConversationResolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_conversation_resolution') }})
    required_linear_history: Optional[ProtectedBranchRequiredLinearHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    required_pull_request_reviews: Optional[ProtectedBranchRequiredPullRequestReviews] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_signatures: Optional[ProtectedBranchRequiredSignatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_signatures') }})
    required_status_checks: Optional[StatusCheckPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: Optional[BranchRestrictionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    
