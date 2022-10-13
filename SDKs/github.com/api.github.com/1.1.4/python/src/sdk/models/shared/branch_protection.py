from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protected_branch_admin_enforced
from . import protected_branch_pull_request_review
from . import branch_restriction_policy


@dataclass_json
@dataclass
class BranchProtectionAllowDeletions:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class BranchProtectionAllowForcePushes:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredLinearHistory:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredStatusChecks:
    contexts: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    contexts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts_url' }})
    enforcement_level: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement_level' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class BranchProtection:
    allow_deletions: Optional[BranchProtectionAllowDeletions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_deletions' }})
    allow_force_pushes: Optional[BranchProtectionAllowForcePushes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_force_pushes' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    enforce_admins: Optional[protected_branch_admin_enforced.ProtectedBranchAdminEnforced] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce_admins' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection_url' }})
    required_linear_history: Optional[BranchProtectionRequiredLinearHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_linear_history' }})
    required_pull_request_reviews: Optional[protected_branch_pull_request_review.ProtectedBranchPullRequestReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_pull_request_reviews' }})
    required_status_checks: BranchProtectionRequiredStatusChecks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_status_checks' }})
    restrictions: Optional[branch_restriction_policy.BranchRestrictionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
