from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestPasswordPoliciesConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPasswordPoliciesConfigRequest:
    headers: RequestPasswordPoliciesConfigHeaders = field()
    

@dataclass
class RequestPasswordPoliciesConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    password_policies_config: Optional[shared.PasswordPoliciesConfig] = field(default=None)
    
