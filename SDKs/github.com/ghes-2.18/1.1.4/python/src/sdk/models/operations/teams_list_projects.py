from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListProjectsPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListProjectsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListProjectsHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListProjectsRequest:
    path_params: TeamsListProjectsPathParams = field(default=None)
    query_params: TeamsListProjectsQueryParams = field(default=None)
    headers: TeamsListProjectsHeaders = field(default=None)
    

@dataclass
class TeamsListProjectsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_projects: Optional[List[shared.TeamProject]] = field(default=None)
    
