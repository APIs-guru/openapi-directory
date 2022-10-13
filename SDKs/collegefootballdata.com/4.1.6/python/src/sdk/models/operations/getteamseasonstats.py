from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamSeasonStatsQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamSeasonStatsRequest:
    query_params: GetTeamSeasonStatsQueryParams = field(default=None)
    

@dataclass
class GetTeamSeasonStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_season_stats: Optional[List[shared.TeamSeasonStat]] = field(default=None)
    
