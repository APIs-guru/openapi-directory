from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import updateencryptionpasswordpolicies
from . import updateloginpasswordpolicies
from . import updatesharespasswordpolicies


@dataclass_json
@dataclass
class UpdatePasswordPoliciesConfig:
    encryption_password_policies: Optional[updateencryptionpasswordpolicies.UpdateEncryptionPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionPasswordPolicies' }})
    login_password_policies: Optional[updateloginpasswordpolicies.UpdateLoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginPasswordPolicies' }})
    shares_password_policies: Optional[updatesharespasswordpolicies.UpdateSharesPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharesPasswordPolicies' }})
    
