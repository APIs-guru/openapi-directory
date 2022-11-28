from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListChildInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListChildInOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListChildInOrgRequest:
    path_params: TeamsListChildInOrgPathParams = field()
    query_params: TeamsListChildInOrgQueryParams = field()
    

@dataclass
class TeamsListChildInOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    teams: Optional[List[shared.Team]] = field(default=None)
    
