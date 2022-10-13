from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSslCertificatesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSslCertificatesRequest:
    query_params: GetSslCertificatesQueryParams = field(default=None)
    

@dataclass
class GetSslCertificatesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ssl_certificates: Optional[List[shared.SslCertificate]] = field(default=None)
    status_code: int = field(default=None)
    
