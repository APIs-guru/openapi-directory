from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class HealthGetQueueUsageSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetQueueUsageRequest:
    security: HealthGetQueueUsageSecurity = field()
    

@dataclass
class HealthGetQueueUsageResponse:
    content_type: str = field()
    status_code: int = field()
    
