from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostBuildQueryParams:
    nocache: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'nocache', 'style': 'form', 'explode': True }})
    pull: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pull', 'style': 'form', 'explode': True }})
    q: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    t: str = field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBuildHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class PostBuildRequest:
    query_params: PostBuildQueryParams = field(default=None)
    headers: PostBuildHeaders = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/tar' }})
    

@dataclass
class PostBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
