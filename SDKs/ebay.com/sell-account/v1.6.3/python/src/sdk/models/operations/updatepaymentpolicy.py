from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentPolicyPathParams:
    payment_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_policy_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentPolicyRequest:
    path_params: UpdatePaymentPolicyPathParams = field(default=None)
    request: shared.PaymentPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentPolicySecurity = field(default=None)
    

@dataclass
class UpdatePaymentPolicyResponse:
    content_type: str = field(default=None)
    set_payment_policy_response: Optional[shared.SetPaymentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
