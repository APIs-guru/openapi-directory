from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class FireteamSearchPublicAvailableClanFireteamsPathParams:
    activity_type: int = field(metadata={'path_param': { 'field_name': 'activityType', 'style': 'simple', 'explode': False }})
    date_range: int = field(metadata={'path_param': { 'field_name': 'dateRange', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    platform: int = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    slot_filter: int = field(metadata={'path_param': { 'field_name': 'slotFilter', 'style': 'simple', 'explode': False }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsQueryParams:
    lang_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'langFilter', 'style': 'form', 'explode': True }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsRequest:
    path_params: FireteamSearchPublicAvailableClanFireteamsPathParams = field()
    query_params: FireteamSearchPublicAvailableClanFireteamsQueryParams = field()
    security: FireteamSearchPublicAvailableClanFireteamsSecurity = field()
    

@dataclass
class FireteamSearchPublicAvailableClanFireteamsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
