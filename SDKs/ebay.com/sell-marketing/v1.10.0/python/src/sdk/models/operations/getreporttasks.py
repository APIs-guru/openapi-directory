from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportTasksQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    report_task_statuses: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'report_task_statuses', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReportTasksSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportTasksRequest:
    query_params: GetReportTasksQueryParams = field(default=None)
    security: GetReportTasksSecurity = field(default=None)
    

@dataclass
class GetReportTasksResponse:
    content_type: str = field(default=None)
    report_task_paged_collection: Optional[shared.ReportTaskPagedCollection] = field(default=None)
    status_code: int = field(default=None)
    
