from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamMatchupQueryParams:
    max_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxYear', 'style': 'form', 'explode': True }})
    min_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minYear', 'style': 'form', 'explode': True }})
    team1: str = field(default=None, metadata={'query_param': { 'field_name': 'team1', 'style': 'form', 'explode': True }})
    team2: str = field(default=None, metadata={'query_param': { 'field_name': 'team2', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamMatchupRequest:
    query_params: GetTeamMatchupQueryParams = field(default=None)
    

@dataclass
class GetTeamMatchupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_matchup: Optional[shared.TeamMatchup] = field(default=None)
    
