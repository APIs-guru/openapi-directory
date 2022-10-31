from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVolumesNameJSONPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesNameJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesNameJSONRequest:
    path_params: GetVolumesNameJSONPathParams = field(default=None)
    headers: GetVolumesNameJSONHeaders = field(default=None)
    

@dataclass
class GetVolumesNameJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[Any] = field(default=None)
    
