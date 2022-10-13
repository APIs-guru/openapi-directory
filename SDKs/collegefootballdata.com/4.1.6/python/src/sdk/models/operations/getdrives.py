from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDrivesQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    defense: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defense', 'style': 'form', 'explode': True }})
    defense_conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defenseConference', 'style': 'form', 'explode': True }})
    offense: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offense', 'style': 'form', 'explode': True }})
    offense_conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offenseConference', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: int = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDrivesRequest:
    query_params: GetDrivesQueryParams = field(default=None)
    

@dataclass
class GetDrivesResponse:
    content_type: str = field(default=None)
    drives: Optional[List[shared.Drive]] = field(default=None)
    status_code: int = field(default=None)
    
