from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdvancedTeamSeasonStatsQueryParams:
    end_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdvancedTeamSeasonStatsRequest:
    query_params: GetAdvancedTeamSeasonStatsQueryParams = field(default=None)
    

@dataclass
class GetAdvancedTeamSeasonStatsResponse:
    advanced_season_stats: Optional[List[shared.AdvancedSeasonStat]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
