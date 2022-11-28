from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    time_frame: AggregatedGetConversionsSummaryTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[AggregatedGetConversionsSummarySortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    status: Optional[AggregatedGetConversionsSummaryStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class AggregatedGetConversionsSummaryRequest:
    query_params: AggregatedGetConversionsSummaryQueryParams = field()
    

@dataclass
class AggregatedGetConversionsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_aggregated_aggregated_summary_result: Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult] = field(default=None)
    
