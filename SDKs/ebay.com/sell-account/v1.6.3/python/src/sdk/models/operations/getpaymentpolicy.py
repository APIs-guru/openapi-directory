from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentPolicyPathParams:
    payment_policy_id: str = field(metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentPolicyRequest:
    path_params: GetPaymentPolicyPathParams = field()
    security: GetPaymentPolicySecurity = field()
    

@dataclass
class GetPaymentPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    payment_policy: Optional[shared.PaymentPolicy] = field(default=None)
    
