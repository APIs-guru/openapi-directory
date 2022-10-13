from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTasksQueryParams:
    date_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_range', 'style': 'form', 'explode': True }})
    feed_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'feed_type', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    look_back_days: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'look_back_days', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    schedule_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'schedule_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTasksSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTasksRequest:
    query_params: GetTasksQueryParams = field(default=None)
    security: GetTasksSecurity = field(default=None)
    

@dataclass
class GetTasksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    task_collection: Optional[shared.TaskCollection] = field(default=None)
    
