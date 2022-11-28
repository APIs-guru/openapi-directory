from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRankingsQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRankingsRequest:
    query_params: GetRankingsQueryParams = field()
    

@dataclass
class GetRankingsResponse:
    content_type: str = field()
    status_code: int = field()
    ranking_weeks: Optional[List[shared.RankingWeek]] = field(default=None)
    
