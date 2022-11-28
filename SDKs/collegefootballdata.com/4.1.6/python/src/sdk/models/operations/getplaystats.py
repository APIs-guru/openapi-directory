from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayStatsQueryParams:
    athlete_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'athleteId', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    stat_type_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'statTypeId', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayStatsRequest:
    query_params: GetPlayStatsQueryParams = field()
    

@dataclass
class GetPlayStatsResponse:
    content_type: str = field()
    status_code: int = field()
    play_stats: Optional[List[shared.PlayStat]] = field(default=None)
    
