from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScheduledTasksPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduledTasksQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduledTasksRequest:
    path_params: GetScheduledTasksPathParams = field(default=None)
    query_params: GetScheduledTasksQueryParams = field(default=None)
    

@dataclass
class GetScheduledTasksResponse:
    content_type: str = field(default=None)
    scheduled_tasks: Optional[List[shared.ScheduledTask]] = field(default=None)
    status_code: int = field(default=None)
    
