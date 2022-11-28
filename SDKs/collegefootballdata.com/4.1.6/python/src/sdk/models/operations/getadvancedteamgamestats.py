from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAdvancedTeamGameStatsQueryParams:
    exclude_garbage_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    opponent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'opponent', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAdvancedTeamGameStatsRequest:
    query_params: GetAdvancedTeamGameStatsQueryParams = field()
    

@dataclass
class GetAdvancedTeamGameStatsResponse:
    content_type: str = field()
    status_code: int = field()
    advanced_game_stats: Optional[List[shared.AdvancedGameStat]] = field(default=None)
    
