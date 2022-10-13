from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersUsageHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetContainersUsageRequest:
    headers: GetContainersUsageHeaders = field(default=None)
    

@dataclass
class GetContainersUsageResponse:
    containers_usage_info: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
