from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeletePaymentPolicyPathParams:
    payment_policy_id: str = field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeletePaymentPolicyRequest:
    path_params: DeletePaymentPolicyPathParams = field()
    security: DeletePaymentPolicySecurity = field()
    

@dataclass
class DeletePaymentPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    
