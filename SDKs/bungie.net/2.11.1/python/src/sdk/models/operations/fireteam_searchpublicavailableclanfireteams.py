from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FireteamSearchPublicAvailableClanFireteamsPathParams:
    activity_type: int = field(default=None, metadata={'path_param': { 'field_name': 'activityType', 'style': 'simple', 'explode': False }})
    date_range: int = field(default=None, metadata={'path_param': { 'field_name': 'dateRange', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    platform: int = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    slot_filter: int = field(default=None, metadata={'path_param': { 'field_name': 'slotFilter', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsQueryParams:
    lang_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsRequest:
    path_params: FireteamSearchPublicAvailableClanFireteamsPathParams = field(default=None)
    query_params: FireteamSearchPublicAvailableClanFireteamsQueryParams = field(default=None)
    security: FireteamSearchPublicAvailableClanFireteamsSecurity = field(default=None)
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
