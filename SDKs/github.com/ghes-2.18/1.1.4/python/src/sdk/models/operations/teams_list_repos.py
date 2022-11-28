from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListReposPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListReposQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListReposRequest:
    path_params: TeamsListReposPathParams = field()
    query_params: TeamsListReposQueryParams = field()
    

@dataclass
class TeamsListReposResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    
