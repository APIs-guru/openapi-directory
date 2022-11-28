from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PasswordPoliciesConfig:
    r"""PasswordPoliciesConfig
    Set of password policies
    """
    
    encryption_password_policies: Optional[EncryptionPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionPasswordPolicies') }})
    login_password_policies: Optional[LoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginPasswordPolicies') }})
    shares_password_policies: Optional[SharesPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharesPasswordPolicies') }})
    
