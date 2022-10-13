from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class HitsGetHitsFilterEnum(str, Enum):
    SPIDERS = "spiders"
    UNIQUES = "uniques"
    NONUNIQUES = "nonuniques"
    CONVERSIONS = "conversions"

class HitsGetHitsTimeframeEnum(str, Enum):
    YESTERDAY = "yesterday"
    LAST7 = "last7"
    LAST30 = "last30"
    LASTMONTH = "lastmonth"
    CURRENTMONTH = "currentmonth"
    PREVIOUSMONTH = "previousmonth"
    LAST90 = "last90"
    LAST120 = "last120"
    LAST180 = "last180"
    CUSTOM = "custom"


@dataclass
class HitsGetHitsQueryParams:
    filter: Optional[HitsGetHitsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    timeframe: HitsGetHitsTimeframeEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class HitsGetHitsRequest:
    query_params: HitsGetHitsQueryParams = field(default=None)
    

@dataclass
class HitsGetHitsResponse:
    api_core_dto_click_stream_hit_list_page: Optional[shared.APICoreDtoClickStreamHitListPage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
