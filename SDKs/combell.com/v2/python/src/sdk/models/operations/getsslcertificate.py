from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSslCertificatePathParams:
    sha1_fingerprint: str = field(metadata={'path_param': { 'field_name': 'sha1Fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSslCertificateQueryParams:
    sha1_fingerprint: str = field(metadata={'query_param': { 'field_name': 'sha1_fingerprint', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSslCertificateRequest:
    path_params: GetSslCertificatePathParams = field()
    query_params: GetSslCertificateQueryParams = field()
    

@dataclass
class GetSslCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    ssl_certificate_detail: Optional[shared.SslCertificateDetail] = field(default=None)
    
