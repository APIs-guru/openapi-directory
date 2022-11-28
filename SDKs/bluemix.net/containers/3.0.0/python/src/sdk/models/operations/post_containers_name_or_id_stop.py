from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostContainersNameOrIDStopPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStopQueryParams:
    t: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 't', 'style': 'form', 'explode': True }})
    

@dataclass
class PostContainersNameOrIDStopHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostContainersNameOrIDStopRequest:
    headers: PostContainersNameOrIDStopHeaders = field()
    path_params: PostContainersNameOrIDStopPathParams = field()
    query_params: PostContainersNameOrIDStopQueryParams = field()
    

@dataclass
class PostContainersNameOrIDStopResponse:
    content_type: str = field()
    status_code: int = field()
    
