from dataclasses import dataclass, field
from typing import Optional
FETCH_EVIDENCE_CONTENT_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class FetchEvidenceContentPathParams:
    payment_dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEvidenceContentQueryParams:
    evidence_id: str = field(default=None, metadata={'query_param': { 'field_name': 'evidence_id', 'style': 'form', 'explode': True }})
    file_id: str = field(default=None, metadata={'query_param': { 'field_name': 'file_id', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchEvidenceContentSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchEvidenceContentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEvidenceContentPathParams = field(default=None)
    query_params: FetchEvidenceContentQueryParams = field(default=None)
    security: FetchEvidenceContentSecurity = field(default=None)
    

@dataclass
class FetchEvidenceContentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
