from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSpRatingsQueryParams:
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpRatingsRequest:
    query_params: GetSpRatingsQueryParams = field()
    

@dataclass
class GetSpRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    team_sp_ratings: Optional[List[shared.TeamSpRating]] = field(default=None)
    
