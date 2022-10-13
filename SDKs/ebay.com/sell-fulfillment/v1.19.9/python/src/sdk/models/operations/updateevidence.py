from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_EVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class UpdateEvidencePathParams:
    payment_dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEvidenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateEvidenceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateEvidencePathParams = field(default=None)
    request: Optional[shared.UpdateEvidencePaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateEvidenceSecurity = field(default=None)
    

@dataclass
class UpdateEvidenceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
