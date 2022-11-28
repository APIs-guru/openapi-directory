from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInventoryTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInventoryTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInventoryTaskRequest:
    path_params: GetInventoryTaskPathParams = field()
    security: GetInventoryTaskSecurity = field()
    

@dataclass
class GetInventoryTaskResponse:
    content_type: str = field()
    status_code: int = field()
    inventory_task: Optional[shared.InventoryTask] = field(default=None)
    
