from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePasswordPoliciesConfig:
    r"""UpdatePasswordPoliciesConfig
    Request model for updating a set of password policies
    """
    
    encryption_password_policies: Optional[UpdateEncryptionPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionPasswordPolicies') }})
    login_password_policies: Optional[UpdateLoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginPasswordPolicies') }})
    shares_password_policies: Optional[UpdateSharesPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharesPasswordPolicies') }})
    
