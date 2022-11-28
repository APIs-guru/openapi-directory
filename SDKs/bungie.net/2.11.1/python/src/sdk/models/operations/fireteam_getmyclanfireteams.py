from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FireteamGetMyClanFireteamsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    include_closed: bool = field(metadata={'path_param': { 'field_name': 'includeClosed', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    platform: int = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetMyClanFireteamsQueryParams:
    group_filter: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'groupFilter', 'style': 'form', 'explode': True }})
    lang_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class FireteamGetMyClanFireteamsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetMyClanFireteamsRequest:
    path_params: FireteamGetMyClanFireteamsPathParams = field()
    query_params: FireteamGetMyClanFireteamsQueryParams = field()
    security: FireteamGetMyClanFireteamsSecurity = field()
    

@dataclass
class FireteamGetMyClanFireteamsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
