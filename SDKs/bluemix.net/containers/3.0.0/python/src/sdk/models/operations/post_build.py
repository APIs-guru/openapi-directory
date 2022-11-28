from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostBuildQueryParams:
    t: str = field(metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    nocache: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'nocache', 'style': 'form', 'explode': True }})
    pull: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pull', 'style': 'form', 'explode': True }})
    q: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBuildHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostBuildRequest:
    headers: PostBuildHeaders = field()
    query_params: PostBuildQueryParams = field()
    request: bytes = field(metadata={'request': { 'media_type': 'application/tar' }})
    

@dataclass
class PostBuildResponse:
    content_type: str = field()
    status_code: int = field()
    
