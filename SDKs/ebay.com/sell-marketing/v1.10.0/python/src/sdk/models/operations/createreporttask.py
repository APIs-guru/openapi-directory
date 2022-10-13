from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CreateReportTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReportTaskRequest:
    request: shared.CreateReportTask = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateReportTaskSecurity = field(default=None)
    

@dataclass
class CreateReportTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
