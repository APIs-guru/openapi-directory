from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamMatchupQueryParams:
    team1: str = field(metadata={'query_param': { 'field_name': 'team1', 'style': 'form', 'explode': True }})
    team2: str = field(metadata={'query_param': { 'field_name': 'team2', 'style': 'form', 'explode': True }})
    max_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxYear', 'style': 'form', 'explode': True }})
    min_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamMatchupRequest:
    query_params: GetTeamMatchupQueryParams = field()
    

@dataclass
class GetTeamMatchupResponse:
    content_type: str = field()
    status_code: int = field()
    team_matchup: Optional[shared.TeamMatchup] = field(default=None)
    
