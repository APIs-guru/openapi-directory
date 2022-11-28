from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPlayersPlayerIDPathParams:
    player_id: str = field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchPlayersPlayerIDRequest:
    path_params: PatchPlayersPlayerIDPathParams = field()
    request: shared.Playerinput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchPlayersPlayerIDSecurity = field()
    

@dataclass
class PatchPlayersPlayerIDResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
