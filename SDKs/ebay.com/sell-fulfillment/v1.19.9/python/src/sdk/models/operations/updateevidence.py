from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_EVIDENCE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class UpdateEvidencePathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEvidenceSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateEvidenceRequest:
    path_params: UpdateEvidencePathParams = field()
    security: UpdateEvidenceSecurity = field()
    request: Optional[shared.UpdateEvidencePaymentDisputeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateEvidenceResponse:
    content_type: str = field()
    status_code: int = field()
    
