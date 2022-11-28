from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteReportTaskPathParams:
    report_task_id: str = field(metadata={'path_param': { 'field_name': 'report_task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteReportTaskRequest:
    path_params: DeleteReportTaskPathParams = field()
    security: DeleteReportTaskSecurity = field()
    

@dataclass
class DeleteReportTaskResponse:
    content_type: str = field()
    status_code: int = field()
    
