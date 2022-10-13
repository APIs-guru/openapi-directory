from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePlayersPlayerIDPathParams:
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeletePlayersPlayerIDRequest:
    path_params: DeletePlayersPlayerIDPathParams = field(default=None)
    security: DeletePlayersPlayerIDSecurity = field(default=None)
    

@dataclass
class DeletePlayersPlayerIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
