from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class HealthGetQueueTasksSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthGetQueueTasksRequest:
    security: HealthGetQueueTasksSecurity = field()
    

@dataclass
class HealthGetQueueTasksResponse:
    content_type: str = field()
    status_code: int = field()
    
