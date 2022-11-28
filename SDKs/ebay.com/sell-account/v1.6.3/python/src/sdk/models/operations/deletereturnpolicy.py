from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteReturnPolicyPathParams:
    return_policy_id: str = field(metadata={'path_param': { 'field_name': 'return_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReturnPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteReturnPolicyRequest:
    path_params: DeleteReturnPolicyPathParams = field()
    security: DeleteReturnPolicySecurity = field()
    

@dataclass
class DeleteReturnPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
