from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlayersPlayerIDPathParams:
    player_id: str = field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPlayersPlayerIDRequest:
    path_params: GetPlayersPlayerIDPathParams = field()
    security: GetPlayersPlayerIDSecurity = field()
    

@dataclass
class GetPlayersPlayerIDResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
