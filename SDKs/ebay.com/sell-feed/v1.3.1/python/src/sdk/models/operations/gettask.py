from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaskRequest:
    path_params: GetTaskPathParams = field(default=None)
    security: GetTaskSecurity = field(default=None)
    

@dataclass
class GetTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    task: Optional[shared.Task] = field(default=None)
    
