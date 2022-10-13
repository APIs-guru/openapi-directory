from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePaymentPolicySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePaymentPolicyRequest:
    request: shared.PaymentPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentPolicySecurity = field(default=None)
    

@dataclass
class CreatePaymentPolicyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    set_payment_policy_response: Optional[shared.SetPaymentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
