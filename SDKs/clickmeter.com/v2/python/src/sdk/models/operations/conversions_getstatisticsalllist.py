from dataclasses import dataclass, field
from typing import Enum,List,Optional
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
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    group_by: Optional[ConversionsGetStatisticsAllListGroupByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'groupBy', 'style': 'form', 'explode': True }})
    status: Optional[ConversionsGetStatisticsAllListStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    time_frame: ConversionsGetStatisticsAllListTimeFrameEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversionsGetStatisticsAllListRequest:
    query_params: ConversionsGetStatisticsAllListQueryParams = field(default=None)
    

@dataclass
class ConversionsGetStatisticsAllListResponse:
    api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
