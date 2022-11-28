from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConferenceSpRatingsQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConferenceSpRatingsRequest:
    query_params: GetConferenceSpRatingsQueryParams = field()
    

@dataclass
class GetConferenceSpRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    conference_sp_ratings: Optional[List[shared.ConferenceSpRating]] = field(default=None)
    
