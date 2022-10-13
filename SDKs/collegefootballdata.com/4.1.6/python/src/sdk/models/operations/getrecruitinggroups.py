from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRecruitingGroupsQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    end_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endYear', 'style': 'form', 'explode': True }})
    start_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startYear', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecruitingGroupsRequest:
    query_params: GetRecruitingGroupsQueryParams = field(default=None)
    

@dataclass
class GetRecruitingGroupsResponse:
    content_type: str = field(default=None)
    position_group_recruiting_ratings: Optional[List[shared.PositionGroupRecruitingRating]] = field(default=None)
    status_code: int = field(default=None)
    
