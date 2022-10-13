from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReturnPolicyPathParams:
    return_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnPolicyRequest:
    path_params: GetReturnPolicyPathParams = field(default=None)
    security: GetReturnPolicySecurity = field(default=None)
    

@dataclass
class GetReturnPolicyResponse:
    content_type: str = field(default=None)
    return_policy: Optional[shared.ReturnPolicy] = field(default=None)
    status_code: int = field(default=None)
    
