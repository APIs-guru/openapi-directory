from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamPpaQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamPpaRequest:
    query_params: GetTeamPpaQueryParams = field()
    

@dataclass
class GetTeamPpaResponse:
    content_type: str = field()
    status_code: int = field()
    team_ppas: Optional[List[shared.TeamPpa]] = field(default=None)
    
