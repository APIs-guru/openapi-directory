from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PullsListCommitsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class PullsListCommitsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class PullsListCommitsRequest:
    path_params: PullsListCommitsPathParams = field()
    query_params: PullsListCommitsQueryParams = field()
    

@dataclass
class PullsListCommitsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    commits: Optional[List[shared.Commit]] = field(default=None)
    
