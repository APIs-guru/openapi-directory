from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersNameOrIDJSONPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersNameOrIDJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetContainersNameOrIDJSONRequest:
    path_params: GetContainersNameOrIDJSONPathParams = field(default=None)
    headers: GetContainersNameOrIDJSONHeaders = field(default=None)
    

@dataclass
class GetContainersNameOrIDJSONResponse:
    container_info: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
