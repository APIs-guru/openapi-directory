from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPaymentPolicyByNameQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentPolicyByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentPolicyByNameRequest:
    query_params: GetPaymentPolicyByNameQueryParams = field(default=None)
    security: GetPaymentPolicyByNameSecurity = field(default=None)
    

@dataclass
class GetPaymentPolicyByNameResponse:
    content_type: str = field(default=None)
    payment_policy: Optional[shared.PaymentPolicy] = field(default=None)
    status_code: int = field(default=None)
    
