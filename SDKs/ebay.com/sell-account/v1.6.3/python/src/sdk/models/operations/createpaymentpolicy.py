from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePaymentPolicyRequest:
    request: shared.PaymentPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentPolicySecurity = field()
    

@dataclass
class CreatePaymentPolicyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    set_payment_policy_response: Optional[shared.SetPaymentPolicyResponse] = field(default=None)
    
