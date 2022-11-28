from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ConversionsGetStatisticsSinglePathParams:
    conversion_id: int = field(metadata={'path_param': { 'field_name': 'conversionId', 'style': 'simple', 'explode': False }})
    
class ConversionsGetStatisticsSingleTimeFrameEnum(str, Enum):
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
class ConversionsGetStatisticsSingleQueryParams:
    time_frame: ConversionsGetStatisticsSingleTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    favourite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'favourite', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    hourly: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hourly', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversionsGetStatisticsSingleRequest:
    path_params: ConversionsGetStatisticsSinglePathParams = field()
    query_params: ConversionsGetStatisticsSingleQueryParams = field()
    

@dataclass
class ConversionsGetStatisticsSingleResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_aggregated_aggregated_result: Optional[shared.APICoreDtoAggregatedAggregatedResult] = field(default=None)
    
