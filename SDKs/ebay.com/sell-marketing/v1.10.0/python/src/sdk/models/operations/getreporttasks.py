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
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportTasksRequest:
    query_params: GetReportTasksQueryParams = field()
    security: GetReportTasksSecurity = field()
    

@dataclass
class GetReportTasksResponse:
    content_type: str = field()
    status_code: int = field()
    report_task_paged_collection: Optional[shared.ReportTaskPagedCollection] = field(default=None)
    
