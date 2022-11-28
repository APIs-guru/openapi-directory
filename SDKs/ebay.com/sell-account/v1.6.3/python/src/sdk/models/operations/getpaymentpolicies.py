from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentPoliciesQueryParams:
    marketplace_id: str = field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentPoliciesRequest:
    query_params: GetPaymentPoliciesQueryParams = field()
    security: GetPaymentPoliciesSecurity = field()
    

@dataclass
class GetPaymentPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    payment_policy_response: Optional[shared.PaymentPolicyResponse] = field(default=None)
    
