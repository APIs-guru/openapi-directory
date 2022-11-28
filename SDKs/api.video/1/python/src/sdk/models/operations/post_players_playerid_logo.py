from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPlayersPlayerIDLogoPathParams:
    player_id: str = field(metadata={'path_param': { 'field_name': 'playerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPlayersPlayerIDLogoSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostPlayersPlayerIDLogoRequest:
    path_params: PostPlayersPlayerIDLogoPathParams = field()
    security: PostPlayersPlayerIDLogoSecurity = field()
    request: Optional[shared.PlayersUploadLogoPayload] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostPlayersPlayerIDLogoResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[shared.BadRequest] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    player: Optional[shared.Player] = field(default=None)
    
