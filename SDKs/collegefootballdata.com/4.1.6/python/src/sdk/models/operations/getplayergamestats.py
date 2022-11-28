from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayerGameStatsQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    game_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gameId', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayerGameStatsRequest:
    query_params: GetPlayerGameStatsQueryParams = field()
    

@dataclass
class GetPlayerGameStatsResponse:
    content_type: str = field()
    status_code: int = field()
    player_games: Optional[List[shared.PlayerGame]] = field(default=None)
    
