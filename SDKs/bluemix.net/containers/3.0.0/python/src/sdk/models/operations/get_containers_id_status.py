from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersIDStatusPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersIDStatusHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetContainersIDStatusRequest:
    path_params: GetContainersIDStatusPathParams = field(default=None)
    headers: GetContainersIDStatusHeaders = field(default=None)
    

@dataclass
class GetContainersIDStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_container_status: Optional[Any] = field(default=None)
    
