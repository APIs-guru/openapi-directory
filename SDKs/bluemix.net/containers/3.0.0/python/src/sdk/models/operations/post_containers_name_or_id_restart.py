from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersNameOrIDRestartPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRestartQueryParams:
    t: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDRestartHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDRestartRequest:
    path_params: PostContainersNameOrIDRestartPathParams = field(default=None)
    query_params: PostContainersNameOrIDRestartQueryParams = field(default=None)
    headers: PostContainersNameOrIDRestartHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDRestartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
