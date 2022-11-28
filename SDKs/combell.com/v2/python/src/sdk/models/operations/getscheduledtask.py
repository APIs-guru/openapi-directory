from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetScheduledTaskPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    scheduled_task_id: str = field(metadata={'path_param': { 'field_name': 'scheduledTaskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetScheduledTaskQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    scheduled_task_id: str = field(metadata={'query_param': { 'field_name': 'scheduled_task_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetScheduledTaskRequest:
    path_params: GetScheduledTaskPathParams = field()
    query_params: GetScheduledTaskQueryParams = field()
    

@dataclass
class GetScheduledTaskResponse:
    content_type: str = field()
    status_code: int = field()
    scheduled_task: Optional[shared.ScheduledTask] = field(default=None)
    
