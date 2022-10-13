from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetCertificatePdfSecurity:
    cert_auth: shared.SchemeCertAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCertificatePdfRequest:
    request: shared.CertificateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetCertificatePdfSecurity = field(default=None)
    

@dataclass
class GetCertificatePdfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
