from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPlayersPlayerIDLogoPathParams:
    player_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPlayersPlayerIDLogoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostPlayersPlayerIDLogoRequest:
    path_params: PostPlayersPlayerIDLogoPathParams = field(default=None)
    request: Optional[shared.PlayersUploadLogoPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PostPlayersPlayerIDLogoSecurity = field(default=None)
    

@dataclass
class PostPlayersPlayerIDLogoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
