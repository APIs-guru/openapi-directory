from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GroupsGetTopsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hittype: Optional[GroupsGetTopsHittypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hittype', 'style': 'form', 'explode': True }})
    timeframe: GroupsGetTopsTimeframeEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    type: GroupsGetTopsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetTopsRequest:
    path_params: GroupsGetTopsPathParams = field(default=None)
    query_params: GroupsGetTopsQueryParams = field(default=None)
    

@dataclass
class GroupsGetTopsResponse:
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
