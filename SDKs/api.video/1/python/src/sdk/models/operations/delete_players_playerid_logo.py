from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeletePlayersPlayerIDLogoPathParams:
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlayersPlayerIDLogoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeletePlayersPlayerIDLogoRequest:
    path_params: DeletePlayersPlayerIDLogoPathParams = field(default=None)
    security: DeletePlayersPlayerIDLogoSecurity = field(default=None)
    

@dataclass
class DeletePlayersPlayerIDLogoResponse:
    content_type: str = field(default=None)
    delete_players_player_id_logo_204_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
