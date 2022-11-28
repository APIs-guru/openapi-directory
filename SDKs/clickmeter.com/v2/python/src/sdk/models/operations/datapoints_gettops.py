from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DataPointsGetTopsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    timeframe: DataPointsGetTopsTimeframeEnum = field(metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    type: DataPointsGetTopsTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class DataPointsGetTopsRequest:
    path_params: DataPointsGetTopsPathParams = field()
    query_params: DataPointsGetTopsQueryParams = field()
    

@dataclass
class DataPointsGetTopsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    
