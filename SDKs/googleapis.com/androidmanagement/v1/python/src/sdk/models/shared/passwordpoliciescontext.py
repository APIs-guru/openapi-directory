from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PasswordPoliciesContextPasswordPolicyScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_DEVICE = "SCOPE_DEVICE"
    SCOPE_PROFILE = "SCOPE_PROFILE"


@dataclass_json
@dataclass
class PasswordPoliciesContext:
    r"""PasswordPoliciesContext
    Additional context for non-compliance related to password policies.
    """
    
    password_policy_scope: Optional[PasswordPoliciesContextPasswordPolicyScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPolicyScope') }})
    
