from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FireteamGetActivePrivateClanFireteamCountPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountRequest:
    path_params: FireteamGetActivePrivateClanFireteamCountPathParams = field()
    security: FireteamGetActivePrivateClanFireteamCountSecurity = field()
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
