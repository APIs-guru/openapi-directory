from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlaysQueryParams:
    week: int = field(metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    defense: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defense', 'style': 'form', 'explode': True }})
    defense_conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'defenseConference', 'style': 'form', 'explode': True }})
    offense: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offense', 'style': 'form', 'explode': True }})
    offense_conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offenseConference', 'style': 'form', 'explode': True }})
    play_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'playType', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaysRequest:
    query_params: GetPlaysQueryParams = field()
    

@dataclass
class GetPlaysResponse:
    content_type: str = field()
    status_code: int = field()
    plays: Optional[List[shared.Play]] = field(default=None)
    
