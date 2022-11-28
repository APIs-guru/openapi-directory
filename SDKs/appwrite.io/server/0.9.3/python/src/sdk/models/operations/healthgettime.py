from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class HealthGetTimeSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetTimeRequest:
    security: HealthGetTimeSecurity = field()
    

@dataclass
class HealthGetTimeResponse:
    content_type: str = field()
    status_code: int = field()
    
