from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayerUsageQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    exclude_garbage_time: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeGarbageTime', 'style': 'form', 'explode': True }})
    player_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'playerId', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlayerUsageRequest:
    query_params: GetPlayerUsageQueryParams = field()
    

@dataclass
class GetPlayerUsageResponse:
    content_type: str = field()
    status_code: int = field()
    player_usages: Optional[List[shared.PlayerUsage]] = field(default=None)
    
