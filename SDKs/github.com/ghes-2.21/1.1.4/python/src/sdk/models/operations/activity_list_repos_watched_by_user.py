from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListReposWatchedByUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListReposWatchedByUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListReposWatchedByUserRequest:
    path_params: ActivityListReposWatchedByUserPathParams = field()
    query_params: ActivityListReposWatchedByUserQueryParams = field()
    

@dataclass
class ActivityListReposWatchedByUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
