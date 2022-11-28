from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateReportTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReportTaskRequest:
    request: shared.CreateReportTask = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReportTaskSecurity = field()
    

@dataclass
class CreateReportTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
