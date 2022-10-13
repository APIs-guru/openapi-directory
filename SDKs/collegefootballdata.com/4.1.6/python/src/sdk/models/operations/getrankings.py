from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRankingsQueryParams:
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: int = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRankingsRequest:
    query_params: GetRankingsQueryParams = field(default=None)
    

@dataclass
class GetRankingsResponse:
    content_type: str = field(default=None)
    ranking_weeks: Optional[List[shared.RankingWeek]] = field(default=None)
    status_code: int = field(default=None)
    
