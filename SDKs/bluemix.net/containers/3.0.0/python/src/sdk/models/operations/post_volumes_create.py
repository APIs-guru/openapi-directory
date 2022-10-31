from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostVolumesCreateQueryParams:
    fs_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fsName', 'style': 'form', 'explode': True }})
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostVolumesCreateHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesCreateRequest:
    query_params: PostVolumesCreateQueryParams = field(default=None)
    headers: PostVolumesCreateHeaders = field(default=None)
    

@dataclass
class PostVolumesCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volume: Optional[Any] = field(default=None)
    
