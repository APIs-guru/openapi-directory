from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class HealthGetAntiVirusSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetAntiVirusRequest:
    security: HealthGetAntiVirusSecurity = field()
    

@dataclass
class HealthGetAntiVirusResponse:
    content_type: str = field()
    status_code: int = field()
    
