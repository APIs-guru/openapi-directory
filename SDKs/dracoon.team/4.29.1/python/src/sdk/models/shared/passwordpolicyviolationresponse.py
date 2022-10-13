from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import violatedpasswordpolicy


@dataclass_json
@dataclass
class PasswordPolicyViolationResponse:
    code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugInfo' }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    violated_password_policies: Optional[List[violatedpasswordpolicy.ViolatedPasswordPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violatedPasswordPolicies' }})
    
