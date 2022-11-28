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
class ResetPasswordTokenValidateResponse:
    r"""ResetPasswordTokenValidateResponse
    Password reset information
    """
    
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    allow_system_global_weak_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSystemGlobalWeakPassword') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    login_password_policies: Optional[LoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loginPasswordPolicies') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
