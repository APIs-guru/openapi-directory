from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayerSeasonStatsQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endWeek', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    start_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startWeek', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayerSeasonStatsRequest:
    query_params: GetPlayerSeasonStatsQueryParams = field()
    

@dataclass
class GetPlayerSeasonStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_season_stats: Optional[List[shared.PlayerSeasonStat]] = field(default=None)
    
