from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInventoryTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInventoryTaskSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInventoryTaskRequest:
    path_params: GetInventoryTaskPathParams = field(default=None)
    security: GetInventoryTaskSecurity = field(default=None)
    

@dataclass
class GetInventoryTaskResponse:
    content_type: str = field(default=None)
    inventory_task: Optional[shared.InventoryTask] = field(default=None)
    status_code: int = field(default=None)
    
