from dataclasses import dataclass, field



@dataclass
class HealthGetQueueCertificatesSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetQueueCertificatesRequest:
    security: HealthGetQueueCertificatesSecurity = field(default=None)
    

@dataclass
class HealthGetQueueCertificatesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
