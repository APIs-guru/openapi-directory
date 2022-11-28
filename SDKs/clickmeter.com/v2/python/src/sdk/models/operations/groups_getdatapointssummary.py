from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GroupsGetDatapointsSummaryPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GroupsGetDatapointsSummarySortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GroupsGetDatapointsSummaryStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"

class GroupsGetDatapointsSummaryTimeFrameEnum(str, Enum):
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

class GroupsGetDatapointsSummaryTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class GroupsGetDatapointsSummaryQueryParams:
    time_frame: GroupsGetDatapointsSummaryTimeFrameEnum = field(metadata={'query_param': { 'field_name': 'timeFrame', 'style': 'form', 'explode': True }})
    favourite: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'favourite', 'style': 'form', 'explode': True }})
    from_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fromDay', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[GroupsGetDatapointsSummarySortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    status: Optional[GroupsGetDatapointsSummaryStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    to_day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'toDay', 'style': 'form', 'explode': True }})
    type: Optional[GroupsGetDatapointsSummaryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetDatapointsSummaryRequest:
    path_params: GroupsGetDatapointsSummaryPathParams = field()
    query_params: GroupsGetDatapointsSummaryQueryParams = field()
    

@dataclass
class GroupsGetDatapointsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_aggregated_aggregated_summary_result: Optional[shared.APICoreDtoAggregatedAggregatedSummaryResult] = field(default=None)
    
