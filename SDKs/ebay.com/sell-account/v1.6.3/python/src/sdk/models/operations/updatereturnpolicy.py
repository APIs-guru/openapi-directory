from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateReturnPolicyPathParams:
    return_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateReturnPolicyRequest:
    path_params: UpdateReturnPolicyPathParams = field(default=None)
    request: shared.ReturnPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateReturnPolicySecurity = field(default=None)
    

@dataclass
class UpdateReturnPolicyResponse:
    content_type: str = field(default=None)
    set_return_policy_response: Optional[shared.SetReturnPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
