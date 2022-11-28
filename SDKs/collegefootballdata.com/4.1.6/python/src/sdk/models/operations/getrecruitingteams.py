from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRecruitingTeamsQueryParams:
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecruitingTeamsRequest:
    query_params: GetRecruitingTeamsQueryParams = field()
    

@dataclass
class GetRecruitingTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    team_recruiting_ranks: Optional[List[shared.TeamRecruitingRank]] = field(default=None)
    
