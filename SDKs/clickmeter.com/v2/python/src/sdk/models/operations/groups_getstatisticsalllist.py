from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GroupsGetStatisticsAllListGroupByEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"

class GroupsGetStatisticsAllListTimeFrameEnum(str, Enum):
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
class GroupsGetStatisticsAllListQueryParams:
    time_frame: GroupsGetStatisticsAllListTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    favourite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'favourite', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    group_by: Optional[GroupsGetStatisticsAllListGroupByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'groupBy', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetStatisticsAllListRequest:
    query_params: GroupsGetStatisticsAllListQueryParams = field()
    

@dataclass
class GroupsGetStatisticsAllListResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_dto_aggregated_aggregated_result_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreDtoAggregatedAggregatedResult] = field(default=None)
    
