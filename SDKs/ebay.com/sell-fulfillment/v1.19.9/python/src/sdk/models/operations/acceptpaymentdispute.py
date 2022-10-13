from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
ACCEPT_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class AcceptPaymentDisputePathParams:
    payment_dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AcceptPaymentDisputeSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AcceptPaymentDisputeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: AcceptPaymentDisputePathParams = field(default=None)
    request: Optional[shared.AcceptPaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AcceptPaymentDisputeSecurity = field(default=None)
    

@dataclass
class AcceptPaymentDisputeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
