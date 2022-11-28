from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetCertificatePdfSecurity:
    cert_auth: shared.SchemeCertAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCertificatePdfRequest:
    request: shared.CertificateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetCertificatePdfSecurity = field()
    

@dataclass
class GetCertificatePdfResponse:
    content_type: str = field()
    status_code: int = field()
    
