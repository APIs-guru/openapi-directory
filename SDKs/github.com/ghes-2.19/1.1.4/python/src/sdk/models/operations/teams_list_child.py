from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListChildPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListChildQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListChildRequest:
    path_params: TeamsListChildPathParams = field()
    query_params: TeamsListChildQueryParams = field()
    

@dataclass
class TeamsListChildResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    team_2s: Optional[List[shared.Team2]] = field(default=None)
    
