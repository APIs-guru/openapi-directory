from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLinesQueryParams:
    away: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'away', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    home: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'home', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLinesRequest:
    query_params: GetLinesQueryParams = field(default=None)
    

@dataclass
class GetLinesResponse:
    content_type: str = field(default=None)
    game_lines: Optional[List[shared.GameLines]] = field(default=None)
    status_code: int = field(default=None)
    
