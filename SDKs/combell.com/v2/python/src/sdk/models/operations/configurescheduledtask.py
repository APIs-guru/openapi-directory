from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureScheduledTaskPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    scheduled_task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scheduledTaskId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureScheduledTaskQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    scheduled_task_id: str = field(default=None, metadata={'query_param': { 'field_name': 'scheduled_task_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureScheduledTaskRequest:
    path_params: ConfigureScheduledTaskPathParams = field(default=None)
    query_params: ConfigureScheduledTaskQueryParams = field(default=None)
    request: Optional[shared.ScheduledTask] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureScheduledTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
