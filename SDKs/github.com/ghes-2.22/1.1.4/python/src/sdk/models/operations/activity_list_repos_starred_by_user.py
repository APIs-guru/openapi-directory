from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ActivityListReposStarredByUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListReposStarredByUserQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListReposStarredByUserRequest:
    path_params: ActivityListReposStarredByUserPathParams = field()
    query_params: ActivityListReposStarredByUserQueryParams = field()
    

@dataclass
class ActivityListReposStarredByUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    activity_list_repos_starred_by_user_200_application_json_any_of: Optional[Any] = field(default=None)
    
