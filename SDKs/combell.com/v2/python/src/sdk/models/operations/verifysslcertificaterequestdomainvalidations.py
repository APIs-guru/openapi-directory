from dataclasses import dataclass, field
from typing import List


@dataclass
class VerifySslCertificateRequestDomainValidationsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifySslCertificateRequestDomainValidationsRequest:
    path_params: VerifySslCertificateRequestDomainValidationsPathParams = field(default=None)
    

@dataclass
class VerifySslCertificateRequestDomainValidationsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
