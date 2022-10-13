from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CONTEST_PAYMENT_DISPUTE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class ContestPaymentDisputePathParams:
    payment_dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContestPaymentDisputeSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContestPaymentDisputeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ContestPaymentDisputePathParams = field(default=None)
    request: Optional[shared.ContestPaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ContestPaymentDisputeSecurity = field(default=None)
    

@dataclass
class ContestPaymentDisputeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
