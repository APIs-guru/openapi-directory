from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


ACCEPT_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class AcceptPaymentDisputePathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptPaymentDisputeSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AcceptPaymentDisputeRequest:
    path_params: AcceptPaymentDisputePathParams = field()
    security: AcceptPaymentDisputeSecurity = field()
    request: Optional[shared.AcceptPaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class AcceptPaymentDisputeResponse:
    content_type: str = field()
    status_code: int = field()
    
