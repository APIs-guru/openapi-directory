from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostVolumesNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesNameHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostVolumesNameRequest:
    path_params: PostVolumesNamePathParams = field(default=None)
    headers: PostVolumesNameHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostVolumesNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[Any] = field(default=None)
    
