from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PermissionGrantPolicyEnum(str, Enum):
    PERMISSION_POLICY_UNSPECIFIED = "PERMISSION_POLICY_UNSPECIFIED"
    PROMPT = "PROMPT"
    GRANT = "GRANT"
    DENY = "DENY"


@dataclass_json
@dataclass
class PermissionGrant:
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    policy: Optional[PermissionGrantPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
