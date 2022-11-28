from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVolumesNameJSONPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesNameJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesNameJSONRequest:
    headers: GetVolumesNameJSONHeaders = field()
    path_params: GetVolumesNameJSONPathParams = field()
    

@dataclass
class GetVolumesNameJSONResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[Any] = field(default=None)
    
