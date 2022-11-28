from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BranchProtectionRequiredConversationResolution:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredSignatures:
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class BranchProtectionRequiredStatusChecks:
    contexts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    contexts_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts_url') }})
    enforcement_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcement_level') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class BranchProtection:
    r"""BranchProtection
    Branch Protection
    """
    
    enforce_admins: Optional[ProtectedBranchAdminEnforced] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_admins') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_url') }})
    required_conversation_resolution: Optional[BranchProtectionRequiredConversationResolution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_conversation_resolution') }})
    required_pull_request_reviews: Optional[ProtectedBranchPullRequestReview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_pull_request_reviews') }})
    required_signatures: Optional[BranchProtectionRequiredSignatures] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_signatures') }})
    required_status_checks: Optional[BranchProtectionRequiredStatusChecks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_status_checks') }})
    restrictions: Optional[BranchRestrictionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
