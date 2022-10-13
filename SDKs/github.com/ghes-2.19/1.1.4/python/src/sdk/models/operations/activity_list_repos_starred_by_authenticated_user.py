from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ActivityListReposStarredByAuthenticatedUserQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListReposStarredByAuthenticatedUserRequest:
    query_params: ActivityListReposStarredByAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class ActivityListReposStarredByAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repositories: Optional[List[shared.Repository]] = field(default=None)
    starred_repositories: Optional[List[shared.StarredRepository]] = field(default=None)
    
