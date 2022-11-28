from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeletePlayersPlayerIDLogoPathParams:
    player_id: str = field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePlayersPlayerIDLogoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeletePlayersPlayerIDLogoRequest:
    path_params: DeletePlayersPlayerIDLogoPathParams = field()
    security: DeletePlayersPlayerIDLogoSecurity = field()
    

@dataclass
class DeletePlayersPlayerIDLogoResponse:
    content_type: str = field()
    status_code: int = field()
    delete_players_player_id_logo_204_application_json_object: Optional[dict[str, Any]] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
