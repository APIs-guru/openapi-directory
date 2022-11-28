from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class HealthGetQueueCertificatesSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetQueueCertificatesRequest:
    security: HealthGetQueueCertificatesSecurity = field()
    

@dataclass
class HealthGetQueueCertificatesResponse:
    content_type: str = field()
    status_code: int = field()
    
