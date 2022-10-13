from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DataPointsGetTopsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class DataPointsGetTopsTimeframeEnum(str, Enum):
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

class DataPointsGetTopsTypeEnum(str, Enum):
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
class DataPointsGetTopsQueryParams:
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    timeframe: DataPointsGetTopsTimeframeEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    type: DataPointsGetTopsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DataPointsGetTopsRequest:
    path_params: DataPointsGetTopsPathParams = field(default=None)
    query_params: DataPointsGetTopsQueryParams = field(default=None)
    

@dataclass
class DataPointsGetTopsResponse:
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
