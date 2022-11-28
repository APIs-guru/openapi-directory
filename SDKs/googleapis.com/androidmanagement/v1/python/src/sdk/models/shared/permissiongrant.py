from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PermissionGrantPolicyEnum(str, Enum):
    PERMISSION_POLICY_UNSPECIFIED = "PERMISSION_POLICY_UNSPECIFIED"
    PROMPT = "PROMPT"
    GRANT = "GRANT"
    DENY = "DENY"


@dataclass_json
@dataclass
class PermissionGrant:
    r"""PermissionGrant
    Configuration for an Android permission and its grant state.
    """
    
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    policy: Optional[PermissionGrantPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
