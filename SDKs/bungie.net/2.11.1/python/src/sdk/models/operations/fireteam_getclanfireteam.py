from dataclasses import dataclass, field



@dataclass
class FireteamGetClanFireteamPathParams:
    fireteam_id: int = field(default=None, metadata={'path_param': { 'field_name': 'fireteamId', 'style': 'simple', 'explode': False }})
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetClanFireteamSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetClanFireteamRequest:
    path_params: FireteamGetClanFireteamPathParams = field(default=None)
    security: FireteamGetClanFireteamSecurity = field(default=None)
    

@dataclass
class FireteamGetClanFireteamResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
