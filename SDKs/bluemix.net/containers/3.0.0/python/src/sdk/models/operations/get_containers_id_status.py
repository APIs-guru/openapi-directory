from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersIDStatusPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersIDStatusHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersIDStatusRequest:
    headers: GetContainersIDStatusHeaders = field()
    path_params: GetContainersIDStatusPathParams = field()
    

@dataclass
class GetContainersIDStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_container_status: Optional[Any] = field(default=None)
    
