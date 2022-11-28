from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ConversionsGetTopsPathParams:
    conversion_id: int = field(metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    
class ConversionsGetTopsHittypeEnum(str, Enum):
    CLICKS = "clicks"
    VIEWS = "views"

class ConversionsGetTopsTimeframeEnum(str, Enum):
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

class ConversionsGetTopsTypeEnum(str, Enum):
    DATAPOINTS = "datapoints"
    GROUPS = "groups"
    BROWSERS = "browsers"
    BROWSERSFAMILIES = "browsersfamilies"
    PLATFORMS = "platforms"
    CITIES = "cities"
    COUNTRIES = "countries"
    KEYWORDS = "keywords"
    REFERRERS = "referrers"
    CONVPARAMETERS = "convparameters"
    DESTINATIONS = "destinations"
    LANGUAGES = "languages"
    PARAMS = "params"


@dataclass
class ConversionsGetTopsQueryParams:
    timeframe: ConversionsGetTopsTimeframeEnum = field(metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    type: ConversionsGetTopsTypeEnum = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hittype: Optional[ConversionsGetTopsHittypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hittype', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversionsGetTopsRequest:
    path_params: ConversionsGetTopsPathParams = field()
    query_params: ConversionsGetTopsQueryParams = field()
    

@dataclass
class ConversionsGetTopsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_tops_top: Optional[shared.APICoreDtoTopsTop] = field(default=None)
    
