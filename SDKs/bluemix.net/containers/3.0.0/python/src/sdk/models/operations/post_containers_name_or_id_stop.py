from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersNameOrIDStopPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStopQueryParams:
    t: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDStopHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStopRequest:
    path_params: PostContainersNameOrIDStopPathParams = field(default=None)
    query_params: PostContainersNameOrIDStopQueryParams = field(default=None)
    headers: PostContainersNameOrIDStopHeaders = field(default=None)
    

@dataclass
class PostContainersNameOrIDStopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
