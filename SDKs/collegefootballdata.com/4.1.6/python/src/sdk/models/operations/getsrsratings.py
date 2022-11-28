from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSrsRatingsQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSrsRatingsRequest:
    query_params: GetSrsRatingsQueryParams = field()
    

@dataclass
class GetSrsRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    team_srs_ratings: Optional[List[shared.TeamSrsRating]] = field(default=None)
    
