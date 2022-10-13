from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DataPointsGetStatisticsAggregatedSingleStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"

class DataPointsGetStatisticsAggregatedSingleTimeFrameEnum(str, Enum):
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

class DataPointsGetStatisticsAggregatedSingleTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class DataPointsGetStatisticsAggregatedSingleQueryParams:
    favourite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'favourite', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hourly: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hourly', 'style': 'form', 'explode': True }})
    status: Optional[DataPointsGetStatisticsAggregatedSingleStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    time_frame: DataPointsGetStatisticsAggregatedSingleTimeFrameEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    type: Optional[DataPointsGetStatisticsAggregatedSingleTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DataPointsGetStatisticsAggregatedSingleRequest:
    query_params: DataPointsGetStatisticsAggregatedSingleQueryParams = field(default=None)
    

@dataclass
class DataPointsGetStatisticsAggregatedSingleResponse:
    api_core_dto_aggregated_aggregated_result: Optional[shared.APICoreDtoAggregatedAggregatedResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
