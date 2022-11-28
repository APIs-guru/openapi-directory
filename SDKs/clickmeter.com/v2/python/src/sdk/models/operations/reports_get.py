from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ReportsGetTimeframeEnum(str, Enum):
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

class ReportsGetTypeEnum(str, Enum):
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
class ReportsGetQueryParams:
    timeframe: ReportsGetTimeframeEnum = field(metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    type: ReportsGetTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    conversion: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'conversion', 'style': 'form', 'explode': True }})
    datapoint: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'datapoint', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    group: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    hittype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'hittype', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportsGetRequest:
    query_params: ReportsGetQueryParams = field()
    

@dataclass
class ReportsGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    
