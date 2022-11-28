from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListWatchersForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListWatchersForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListWatchersForRepoRequest:
    path_params: ActivityListWatchersForRepoPathParams = field()
    query_params: ActivityListWatchersForRepoQueryParams = field()
    

@dataclass
class ActivityListWatchersForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
