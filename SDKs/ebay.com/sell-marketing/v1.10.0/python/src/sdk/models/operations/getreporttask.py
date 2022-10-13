from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportTaskPathParams:
    report_task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportTaskRequest:
    path_params: GetReportTaskPathParams = field(default=None)
    security: GetReportTaskSecurity = field(default=None)
    

@dataclass
class GetReportTaskResponse:
    content_type: str = field(default=None)
    report_task: Optional[shared.ReportTask] = field(default=None)
    status_code: int = field(default=None)
    
