from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BranchProtectionAllowDeletions:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class BranchProtectionAllowForcePushes:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredLinearHistory:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredStatusChecks:
    contexts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    enforcement_level: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement_level') }})
    contexts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class BranchProtection:
    r"""BranchProtection
    Branch Protection
    """
    
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    required_status_checks: BranchProtectionRequiredStatusChecks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    allow_deletions: Optional[BranchProtectionAllowDeletions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_deletions') }})
    allow_force_pushes: Optional[BranchProtectionAllowForcePushes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_force_pushes') }})
    enforce_admins: Optional[ProtectedBranchAdminEnforced] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    required_linear_history: Optional[BranchProtectionRequiredLinearHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_linear_history') }})
    required_pull_request_reviews: Optional[ProtectedBranchPullRequestReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    restrictions: Optional[BranchRestrictionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
