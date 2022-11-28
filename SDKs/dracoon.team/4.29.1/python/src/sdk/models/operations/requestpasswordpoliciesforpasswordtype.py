from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestPasswordPoliciesForPasswordTypePathParams:
    password_type: Any = field(metadata={'path_param': { 'field_name': 'password_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeRequest:
    headers: RequestPasswordPoliciesForPasswordTypeHeaders = field()
    path_params: RequestPasswordPoliciesForPasswordTypePathParams = field()
    

@dataclass
class RequestPasswordPoliciesForPasswordTypeResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    password_policies_config: Optional[shared.PasswordPoliciesConfig] = field(default=None)
    
