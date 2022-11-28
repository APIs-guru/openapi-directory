from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGameWeatherQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGameWeatherRequest:
    query_params: GetGameWeatherQueryParams = field()
    

@dataclass
class GetGameWeatherResponse:
    content_type: str = field()
    status_code: int = field()
    game_weathers: Optional[List[shared.GameWeather]] = field(default=None)
    
