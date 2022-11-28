from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EVIDENCE_CONTENT_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class FetchEvidenceContentPathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEvidenceContentQueryParams:
    evidence_id: str = field(metadata={'query_param': { 'field_name': 'evidence_id', 'style': 'form', 'explode': True }})
    file_id: str = field(metadata={'query_param': { 'field_name': 'file_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchEvidenceContentSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchEvidenceContentRequest:
    path_params: FetchEvidenceContentPathParams = field()
    query_params: FetchEvidenceContentQueryParams = field()
    security: FetchEvidenceContentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEvidenceContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
