from dataclasses import dataclass, field
from typing import Optional


@dataclass
class FireteamGetAvailableClanFireteamsPathParams:
    activity_type: int = field(default=None, metadata={'path_param': { 'field_name': 'activityType', 'style': 'simple', 'explode': False }})
    date_range: int = field(default=None, metadata={'path_param': { 'field_name': 'dateRange', 'style': 'simple', 'explode': False }})
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    platform: int = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    public_only: int = field(default=None, metadata={'path_param': { 'field_name': 'publicOnly', 'style': 'simple', 'explode': False }})
    slot_filter: int = field(default=None, metadata={'path_param': { 'field_name': 'slotFilter', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamGetAvailableClanFireteamsQueryParams:
    lang_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class FireteamGetAvailableClanFireteamsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamGetAvailableClanFireteamsRequest:
    path_params: FireteamGetAvailableClanFireteamsPathParams = field(default=None)
    query_params: FireteamGetAvailableClanFireteamsQueryParams = field(default=None)
    security: FireteamGetAvailableClanFireteamsSecurity = field(default=None)
    

@dataclass
class FireteamGetAvailableClanFireteamsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
