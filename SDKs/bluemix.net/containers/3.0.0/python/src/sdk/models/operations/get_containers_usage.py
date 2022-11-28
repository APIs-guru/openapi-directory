from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersUsageHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersUsageRequest:
    headers: GetContainersUsageHeaders = field()
    

@dataclass
class GetContainersUsageResponse:
    content_type: str = field()
    status_code: int = field()
    containers_usage_info: Optional[Any] = field(default=None)
    
