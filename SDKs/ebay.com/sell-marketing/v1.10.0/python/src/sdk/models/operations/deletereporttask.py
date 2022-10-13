from dataclasses import dataclass, field



@dataclass
class DeleteReportTaskPathParams:
    report_task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteReportTaskRequest:
    path_params: DeleteReportTaskPathParams = field(default=None)
    security: DeleteReportTaskSecurity = field(default=None)
    

@dataclass
class DeleteReportTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
