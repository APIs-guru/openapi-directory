from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddScheduledTasksPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddScheduledTasksQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class AddScheduledTasksRequest:
    path_params: AddScheduledTasksPathParams = field(default=None)
    query_params: AddScheduledTasksQueryParams = field(default=None)
    request: Optional[shared.ScheduledTask] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddScheduledTasksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
