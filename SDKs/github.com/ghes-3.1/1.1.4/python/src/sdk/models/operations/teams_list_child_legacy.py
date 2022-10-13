from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TeamsListChildLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsListChildLegacyQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListChildLegacyRequest:
    path_params: TeamsListChildLegacyPathParams = field(default=None)
    query_params: TeamsListChildLegacyQueryParams = field(default=None)
    

@dataclass
class TeamsListChildLegacyResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
