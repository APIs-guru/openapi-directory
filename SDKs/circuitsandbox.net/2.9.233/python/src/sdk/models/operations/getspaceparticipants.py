from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSpaceParticipantsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetSpaceParticipantsFilterTypeEnum(str, Enum):
    NONE = "NONE"
    ACCESS_TYPE = "ACCESS_TYPE"
    ROLE = "ROLE"
    STATE = "STATE"

class GetSpaceParticipantsSortByEnum(str, Enum):
    DISPLAY_NAME = "DISPLAY_NAME"
    NAME = "NAME"
    FIRST_NAME = "FIRST_NAME"

class GetSpaceParticipantsSortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class GetSpaceParticipantsQueryParams:
    filter_type: GetSpaceParticipantsFilterTypeEnum = field(metadata={'query_param': { 'field_name': 'filterType', 'style': 'form', 'explode': True }})
    sort_by: GetSpaceParticipantsSortByEnum = field(metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: GetSpaceParticipantsSortOrderEnum = field(metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    filter_value: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterValue', 'style': 'form', 'explode': True }})
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpaceParticipantsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpaceParticipantsRequest:
    path_params: GetSpaceParticipantsPathParams = field()
    query_params: GetSpaceParticipantsQueryParams = field()
    security: GetSpaceParticipantsSecurity = field()
    

@dataclass
class GetSpaceParticipantsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participants_search_result: Optional[Any] = field(default=None)
    
