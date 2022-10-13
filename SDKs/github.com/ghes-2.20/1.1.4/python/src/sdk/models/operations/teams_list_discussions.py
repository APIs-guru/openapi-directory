from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class TeamsListDiscussionsPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsListDiscussionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class TeamsListDiscussionsQueryParams:
    direction: Optional[TeamsListDiscussionsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class TeamsListDiscussionsRequest:
    path_params: TeamsListDiscussionsPathParams = field(default=None)
    query_params: TeamsListDiscussionsQueryParams = field(default=None)
    

@dataclass
class TeamsListDiscussionsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_discussions: Optional[List[shared.TeamDiscussion]] = field(default=None)
    
