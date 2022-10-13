from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlayersPlayerIDPathParams:
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPlayersPlayerIDRequest:
    path_params: GetPlayersPlayerIDPathParams = field(default=None)
    security: GetPlayersPlayerIDSecurity = field(default=None)
    

@dataclass
class GetPlayersPlayerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
