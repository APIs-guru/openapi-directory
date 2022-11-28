from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostContainersCreateQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersCreateHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersCreateRequest:
    headers: PostContainersCreateHeaders = field()
    query_params: PostContainersCreateQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostContainersCreateResponse:
    content_type: str = field()
    status_code: int = field()
    container_id: Optional[Any] = field(default=None)
    
