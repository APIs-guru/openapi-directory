from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPasswordPoliciesForPasswordTypePathParams:
    password_type: Any = field(default=None, metadata={'path_param': { 'field_name': 'password_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeRequest:
    path_params: RequestPasswordPoliciesForPasswordTypePathParams = field(default=None)
    headers: RequestPasswordPoliciesForPasswordTypeHeaders = field(default=None)
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    password_policies_config: Optional[shared.PasswordPoliciesConfig] = field(default=None)
    status_code: int = field(default=None)
    
