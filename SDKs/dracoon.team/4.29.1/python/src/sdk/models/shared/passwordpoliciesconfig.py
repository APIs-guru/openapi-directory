from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionpasswordpolicies
from . import loginpasswordpolicies
from . import sharespasswordpolicies


@dataclass_json
@dataclass
class PasswordPoliciesConfig:
    encryption_password_policies: Optional[encryptionpasswordpolicies.EncryptionPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionPasswordPolicies' }})
    login_password_policies: Optional[loginpasswordpolicies.LoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginPasswordPolicies' }})
    shares_password_policies: Optional[sharespasswordpolicies.SharesPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharesPasswordPolicies' }})
    
