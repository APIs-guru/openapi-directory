from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScheduledTasksPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduledTasksQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduledTasksRequest:
    path_params: GetScheduledTasksPathParams = field()
    query_params: GetScheduledTasksQueryParams = field()
    

@dataclass
class GetScheduledTasksResponse:
    content_type: str = field()
    status_code: int = field()
    scheduled_tasks: Optional[List[shared.ScheduledTask]] = field(default=None)
    
