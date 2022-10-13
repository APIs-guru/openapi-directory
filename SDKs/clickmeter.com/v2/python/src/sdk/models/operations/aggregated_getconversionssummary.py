from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AggregatedGetConversionsSummarySortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class AggregatedGetConversionsSummaryStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"

class AggregatedGetConversionsSummaryTimeFrameEnum(str, Enum):
    TODAY = "today"
    YESTERDAY = "yesterday"
    LAST7 = "last7"
    LAST30 = "last30"
    LASTMONTH = "lastmonth"
    CURRENTMONTH = "currentmonth"
    PREVIOUSMONTH = "previousmonth"
    LAST90 = "last90"
    LAST120 = "last120"
    LAST180 = "last180"
    LAST12MONTHS = "last12months"
    LASTYEAR = "lastyear"
    CURRENTYEAR = "currentyear"
    BEGINNING = "beginning"
    CUSTOM = "custom"


@dataclass
class AggregatedGetConversionsSummaryQueryParams:
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[AggregatedGetConversionsSummarySortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    status: Optional[AggregatedGetConversionsSummaryStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    time_frame: AggregatedGetConversionsSummaryTimeFrameEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class AggregatedGetConversionsSummaryRequest:
    query_params: AggregatedGetConversionsSummaryQueryParams = field(default=None)
    

@dataclass
class AggregatedGetConversionsSummaryResponse:
    api_core_dto_aggregated_aggregated_summary_result: Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
