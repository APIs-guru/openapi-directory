from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


UPLOAD_EVIDENCE_FILE_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class UploadEvidenceFilePathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadEvidenceFileSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UploadEvidenceFileRequest:
    path_params: UploadEvidenceFilePathParams = field()
    security: UploadEvidenceFileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UploadEvidenceFileResponse:
    content_type: str = field()
    status_code: int = field()
    file_evidence: Optional[shared.FileEvidence] = field(default=None)
    
