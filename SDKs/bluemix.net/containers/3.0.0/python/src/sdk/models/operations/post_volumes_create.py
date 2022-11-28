from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostVolumesCreateQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    fs_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fsName', 'style': 'form', 'explode': True }})
    

@dataclass
class PostVolumesCreateHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostVolumesCreateRequest:
    headers: PostVolumesCreateHeaders = field()
    query_params: PostVolumesCreateQueryParams = field()
    

@dataclass
class PostVolumesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    volume: Optional[Any] = field(default=None)
    
