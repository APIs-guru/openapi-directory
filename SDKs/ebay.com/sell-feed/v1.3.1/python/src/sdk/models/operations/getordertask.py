from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrderTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrderTaskRequest:
    path_params: GetOrderTaskPathParams = field(default=None)
    security: GetOrderTaskSecurity = field(default=None)
    

@dataclass
class GetOrderTaskResponse:
    content_type: str = field(default=None)
    order_task: Optional[shared.OrderTask] = field(default=None)
    status_code: int = field(default=None)
    
