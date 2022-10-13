from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangePasswordPoliciesConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class ChangePasswordPoliciesConfigRequest:
    headers: ChangePasswordPoliciesConfigHeaders = field(default=None)
    request: shared.UpdatePasswordPoliciesConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePasswordPoliciesConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    password_policies_config: Optional[shared.PasswordPoliciesConfig] = field(default=None)
    status_code: int = field(default=None)
    
