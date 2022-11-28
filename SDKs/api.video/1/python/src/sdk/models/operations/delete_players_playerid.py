from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePlayersPlayerIDPathParams:
    player_id: str = field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlayersPlayerIDSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeletePlayersPlayerIDRequest:
    path_params: DeletePlayersPlayerIDPathParams = field()
    security: DeletePlayersPlayerIDSecurity = field()
    

@dataclass
class DeletePlayersPlayerIDResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    
