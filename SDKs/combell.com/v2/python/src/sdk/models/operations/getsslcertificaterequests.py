from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSslCertificateRequestsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSslCertificateRequestsRequest:
    query_params: GetSslCertificateRequestsQueryParams = field(default=None)
    

@dataclass
class GetSslCertificateRequestsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ssl_certificate_requests: Optional[List[shared.SslCertificateRequest]] = field(default=None)
    status_code: int = field(default=None)
    
