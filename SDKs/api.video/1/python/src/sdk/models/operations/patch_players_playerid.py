from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPlayersPlayerIDPathParams:
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PatchPlayersPlayerIDRequest:
    path_params: PatchPlayersPlayerIDPathParams = field(default=None)
    request: shared.Playerinput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchPlayersPlayerIDSecurity = field(default=None)
    

@dataclass
class PatchPlayersPlayerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
