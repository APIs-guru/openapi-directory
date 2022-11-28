from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListWatchedReposForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListWatchedReposForAuthenticatedUserRequest:
    query_params: ActivityListWatchedReposForAuthenticatedUserQueryParams = field()
    

@dataclass
class ActivityListWatchedReposForAuthenticatedUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
