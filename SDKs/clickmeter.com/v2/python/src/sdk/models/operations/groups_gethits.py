from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GroupsGetHitsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GroupsGetHitsFilterEnum(str, Enum):
    SPIDERS = "spiders"
    UNIQUES = "uniques"
    NONUNIQUES = "nonuniques"
    CONVERSIONS = "conversions"

class GroupsGetHitsTimeframeEnum(str, Enum):
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
class GroupsGetHitsQueryParams:
    filter: Optional[GroupsGetHitsFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    timeframe: GroupsGetHitsTimeframeEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeframe', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetHitsRequest:
    path_params: GroupsGetHitsPathParams = field(default=None)
    query_params: GroupsGetHitsQueryParams = field(default=None)
    

@dataclass
class GroupsGetHitsResponse:
    api_core_dto_click_stream_hit_list_page: Optional[shared.APICoreDtoClickStreamHitListPage] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
