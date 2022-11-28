from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


ADD_EVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class AddEvidencePathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddEvidenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddEvidenceRequest:
    path_params: AddEvidencePathParams = field()
    security: AddEvidenceSecurity = field()
    request: Optional[shared.AddEvidencePaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class AddEvidenceResponse:
    content_type: str = field()
    status_code: int = field()
    add_evidence_payment_dispute_response: Optional[shared.AddEvidencePaymentDisputeResponse] = field(default=None)
    
