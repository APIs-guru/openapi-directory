from dataclasses import dataclass, field



@dataclass
class FireteamGetActivePrivateClanFireteamCountPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountRequest:
    path_params: FireteamGetActivePrivateClanFireteamCountPathParams = field(default=None)
    security: FireteamGetActivePrivateClanFireteamCountSecurity = field(default=None)
    

@dataclass
class FireteamGetActivePrivateClanFireteamCountResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
