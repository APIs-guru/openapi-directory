from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FireteamGetClanFireteamPathParams:
    fireteam_id: int = field(metadata={'path_param': { 'field_name': 'fireteamId', 'style': 'simple', 'explode': False }})
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetClanFireteamSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetClanFireteamRequest:
    path_params: FireteamGetClanFireteamPathParams = field()
    security: FireteamGetClanFireteamSecurity = field()
    

@dataclass
class FireteamGetClanFireteamResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
