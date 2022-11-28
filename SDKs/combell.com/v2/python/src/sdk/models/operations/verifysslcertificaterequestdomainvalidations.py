from dataclasses import dataclass, field
from typing import List


@dataclass
class VerifySslCertificateRequestDomainValidationsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifySslCertificateRequestDomainValidationsRequest:
    path_params: VerifySslCertificateRequestDomainValidationsPathParams = field()
    

@dataclass
class VerifySslCertificateRequestDomainValidationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
