from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loginpasswordpolicies


@dataclass_json
@dataclass
class ResetPasswordTokenValidateResponse:
    allow_system_global_weak_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSystemGlobalWeakPassword' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    login_password_policies: Optional[loginpasswordpolicies.LoginPasswordPolicies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loginPasswordPolicies' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
