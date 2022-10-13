from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DataPointsGetStatisticsSinglePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class DataPointsGetStatisticsSingleTimeFrameEnum(str, Enum):
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
class DataPointsGetStatisticsSingleQueryParams:
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hourly: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hourly', 'style': 'form', 'explode': True }})
    time_frame: DataPointsGetStatisticsSingleTimeFrameEnum = field(default=None, metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class DataPointsGetStatisticsSingleRequest:
    path_params: DataPointsGetStatisticsSinglePathParams = field(default=None)
    query_params: DataPointsGetStatisticsSingleQueryParams = field(default=None)
    

@dataclass
class DataPointsGetStatisticsSingleResponse:
    api_core_dto_aggregated_aggregated_result: Optional[shared.APICoreDtoAggregatedAggregatedResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
