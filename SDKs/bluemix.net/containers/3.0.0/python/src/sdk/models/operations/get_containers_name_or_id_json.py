from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersNameOrIDJSONPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersNameOrIDJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersNameOrIDJSONRequest:
    headers: GetContainersNameOrIDJSONHeaders = field()
    path_params: GetContainersNameOrIDJSONPathParams = field()
    

@dataclass
class GetContainersNameOrIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    container_info: Optional[Any] = field(default=None)
    
