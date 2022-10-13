from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentPoliciesQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentPoliciesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentPoliciesRequest:
    query_params: GetPaymentPoliciesQueryParams = field(default=None)
    security: GetPaymentPoliciesSecurity = field(default=None)
    

@dataclass
class GetPaymentPoliciesResponse:
    content_type: str = field(default=None)
    payment_policy_response: Optional[shared.PaymentPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    
