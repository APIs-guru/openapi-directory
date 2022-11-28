from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayerGamePpaQueryParams:
    exclude_garbage_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    player_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'playerId', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    season_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seasonType', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    threshold: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'week', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayerGamePpaRequest:
    query_params: GetPlayerGamePpaQueryParams = field()
    

@dataclass
class GetPlayerGamePpaResponse:
    content_type: str = field()
    status_code: int = field()
    player_game_ppas: Optional[List[shared.PlayerGamePpa]] = field(default=None)
    
