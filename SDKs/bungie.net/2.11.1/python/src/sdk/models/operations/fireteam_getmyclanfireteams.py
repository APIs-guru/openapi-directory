from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FireteamGetMyClanFireteamsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    include_closed: bool = field(default=None, metadata={'path_param': { 'field_name': 'includeClosed', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    platform: int = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetMyClanFireteamsQueryParams:
    group_filter: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'groupFilter', 'style': 'form', 'explode': True }})
    lang_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class FireteamGetMyClanFireteamsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetMyClanFireteamsRequest:
    path_params: FireteamGetMyClanFireteamsPathParams = field(default=None)
    query_params: FireteamGetMyClanFireteamsQueryParams = field(default=None)
    security: FireteamGetMyClanFireteamsSecurity = field(default=None)
    

@dataclass
class FireteamGetMyClanFireteamsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
