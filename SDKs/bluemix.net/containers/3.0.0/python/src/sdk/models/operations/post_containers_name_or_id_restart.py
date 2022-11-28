from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersNameOrIDRestartPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRestartQueryParams:
    t: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDRestartHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRestartRequest:
    headers: PostContainersNameOrIDRestartHeaders = field()
    path_params: PostContainersNameOrIDRestartPathParams = field()
    query_params: PostContainersNameOrIDRestartQueryParams = field()
    

@dataclass
class PostContainersNameOrIDRestartResponse:
    content_type: str = field()
    status_code: int = field()
    
