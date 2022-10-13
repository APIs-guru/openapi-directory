from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSslCertificateRequestPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSslCertificateRequestRequest:
    path_params: GetSslCertificateRequestPathParams = field(default=None)
    

@dataclass
class GetSslCertificateRequestResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    ssl_certificate_request_detail: Optional[shared.SslCertificateRequestDetail] = field(default=None)
    status_code: int = field(default=None)
    
