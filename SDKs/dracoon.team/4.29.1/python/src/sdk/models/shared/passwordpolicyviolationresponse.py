from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PasswordPolicyViolationResponse:
    r"""PasswordPolicyViolationResponse
    List of violated password policies
    """
    
    code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugInfo') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    violated_password_policies: Optional[List[ViolatedPasswordPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violatedPasswordPolicies') }})
    
