from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GroupsGetStatisticsSinglePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GroupsGetStatisticsSingleTimeFrameEnum(str, Enum):
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
class GroupsGetStatisticsSingleQueryParams:
    time_frame: GroupsGetStatisticsSingleTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hourly: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hourly', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetStatisticsSingleRequest:
    path_params: GroupsGetStatisticsSinglePathParams = field()
    query_params: GroupsGetStatisticsSingleQueryParams = field()
    

@dataclass
class GroupsGetStatisticsSingleResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_aggregated_aggregated_result: Optional[shared.APICoreDtoAggregatedAggregatedResult] = field(default=None)
    
