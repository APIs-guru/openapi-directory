from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGamesQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    away: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'away', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    home: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'home', 'style': 'form', 'explode': True }})
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGamesRequest:
    query_params: GetGamesQueryParams = field()
    

@dataclass
class GetGamesResponse:
    content_type: str = field()
    status_code: int = field()
    games: Optional[List[shared.Game]] = field(default=None)
    
