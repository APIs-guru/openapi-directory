from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContainersFloatingIpsQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContainersFloatingIpsHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersFloatingIpsRequest:
    headers: GetContainersFloatingIpsHeaders = field()
    query_params: GetContainersFloatingIpsQueryParams = field()
    

@dataclass
class GetContainersFloatingIpsResponse:
    content_type: str = field()
    status_code: int = field()
    floating_ips: Optional[List[Any]] = field(default=None)
    
