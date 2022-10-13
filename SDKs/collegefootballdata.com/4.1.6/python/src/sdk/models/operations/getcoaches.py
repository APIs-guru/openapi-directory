from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCoachesQueryParams:
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'firstName', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lastName', 'style': 'form', 'explode': True }})
    max_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxYear', 'style': 'form', 'explode': True }})
    min_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minYear', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCoachesRequest:
    query_params: GetCoachesQueryParams = field(default=None)
    

@dataclass
class GetCoachesResponse:
    coaches: Optional[List[shared.Coach]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
