from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


GET_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class GetPaymentDisputePathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentDisputeSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentDisputeRequest:
    path_params: GetPaymentDisputePathParams = field()
    security: GetPaymentDisputeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetPaymentDisputeResponse:
    content_type: str = field()
    status_code: int = field()
    payment_dispute: Optional[shared.PaymentDispute] = field(default=None)
    
