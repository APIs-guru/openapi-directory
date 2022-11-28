from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ActivityListStargazersForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListStargazersForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListStargazersForRepoRequest:
    path_params: ActivityListStargazersForRepoPathParams = field()
    query_params: ActivityListStargazersForRepoQueryParams = field()
    

@dataclass
class ActivityListStargazersForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    activity_list_stargazers_for_repo_200_application_json_any_of: Optional[Any] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
