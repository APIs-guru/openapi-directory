from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPregameWinProbabilitiesQueryParams:
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPregameWinProbabilitiesRequest:
    query_params: GetPregameWinProbabilitiesQueryParams = field()
    

@dataclass
class GetPregameWinProbabilitiesResponse:
    content_type: str = field()
    status_code: int = field()
    pregame_wps: Optional[List[shared.PregameWp]] = field(default=None)
    
