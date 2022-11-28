from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrderTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrderTaskRequest:
    path_params: GetOrderTaskPathParams = field()
    security: GetOrderTaskSecurity = field()
    

@dataclass
class GetOrderTaskResponse:
    content_type: str = field()
    status_code: int = field()
    order_task: Optional[shared.OrderTask] = field(default=None)
    
