from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PasswordPoliciesContextPasswordPolicyScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_DEVICE = "SCOPE_DEVICE"
    SCOPE_PROFILE = "SCOPE_PROFILE"


@dataclass_json
@dataclass
class PasswordPoliciesContext:
    password_policy_scope: Optional[PasswordPoliciesContextPasswordPolicyScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordPolicyScope' }})
    
