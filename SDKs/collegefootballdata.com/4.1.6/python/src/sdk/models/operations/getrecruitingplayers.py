from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRecruitingPlayersQueryParams:
    classification: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecruitingPlayersRequest:
    query_params: GetRecruitingPlayersQueryParams = field(default=None)
    

@dataclass
class GetRecruitingPlayersResponse:
    content_type: str = field(default=None)
    recruits: Optional[List[shared.Recruit]] = field(default=None)
    status_code: int = field(default=None)
    
