from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReturnPolicyPathParams:
    return_policy_id: str = field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReturnPolicyRequest:
    path_params: GetReturnPolicyPathParams = field()
    security: GetReturnPolicySecurity = field()
    

@dataclass
class GetReturnPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    return_policy: Optional[shared.ReturnPolicy] = field(default=None)
    
