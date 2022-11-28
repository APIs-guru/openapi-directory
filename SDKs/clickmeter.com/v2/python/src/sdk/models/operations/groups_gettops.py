from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GroupsGetTopsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GroupsGetTopsHittypeEnum(str, Enum):
    CLICKS = "clicks"
    VIEWS = "views"

class GroupsGetTopsTimeframeEnum(str, Enum):
    YESTERDAY = "yesterday"
    LAST7 = "last7"
    LAST30 = "last30"
    LASTMONTH = "lastmonth"
    CURRENTMONTH = "currentmonth"
    PREVIOUSMONTH = "previousmonth"
    LAST90 = "last90"
    LAST120 = "last120"
    LAST180 = "last180"
    BEGINNING = "beginning"
    CUSTOM = "custom"

class GroupsGetTopsTypeEnum(str, Enum):
    BROWSERS = "browsers"
    BROWSERSFAMILIES = "browsersfamilies"
    PLATFORMS = "platforms"
    CITIES = "cities"
    COUNTRIES = "countries"
    ISPS = "isps"
    IPS = "ips"
    OSS = "oss"
    OSSFAMILIES = "ossfamilies"
    KEYWORDS = "keywords"
    REFERRERS = "referrers"
    DESTINATIONS = "destinations"
    LANGUAGES = "languages"
    PARAMS = "params"


@dataclass
class GroupsGetTopsQueryParams:
    timeframe: GroupsGetTopsTimeframeEnum = field(metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    type: GroupsGetTopsTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hittype: Optional[GroupsGetTopsHittypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hittype', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetTopsRequest:
    path_params: GroupsGetTopsPathParams = field()
    query_params: GroupsGetTopsQueryParams = field()
    

@dataclass
class GroupsGetTopsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    
