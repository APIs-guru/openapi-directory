from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class ConversionsGetStatisticsAllListGroupByEnum(str, Enum):
    WEEK = "week"
    MONTH = "month"

class ConversionsGetStatisticsAllListStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"

class ConversionsGetStatisticsAllListTimeFrameEnum(str, Enum):
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
class ConversionsGetStatisticsAllListQueryParams:
    time_frame: ConversionsGetStatisticsAllListTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    group_by: Optional[ConversionsGetStatisticsAllListGroupByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'groupBy', 'style': 'form', 'explode': True }})
    status: Optional[ConversionsGetStatisticsAllListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversionsGetStatisticsAllListRequest:
    query_params: ConversionsGetStatisticsAllListQueryParams = field()
    

@dataclass
class ConversionsGetStatisticsAllListResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult] = field(default=None)
    
