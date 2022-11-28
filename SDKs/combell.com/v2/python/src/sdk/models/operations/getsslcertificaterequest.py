from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSslCertificateRequestPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSslCertificateRequestRequest:
    path_params: GetSslCertificateRequestPathParams = field()
    

@dataclass
class GetSslCertificateRequestResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    ssl_certificate_request_detail: Optional[shared.SslCertificateRequestDetail] = field(default=None)
    
