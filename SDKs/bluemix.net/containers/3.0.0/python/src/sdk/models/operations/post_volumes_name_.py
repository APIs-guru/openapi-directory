from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostVolumesNamePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesNameHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesNameRequest:
    headers: PostVolumesNameHeaders = field()
    path_params: PostVolumesNamePathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesNameResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[Any] = field(default=None)
    
