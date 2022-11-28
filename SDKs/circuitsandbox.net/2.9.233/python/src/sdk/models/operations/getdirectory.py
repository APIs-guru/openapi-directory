from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetDirectoryFilterEnum(str, Enum):
    NONE = "NONE"
    JOINED = "JOINED"
    REQUESTED = "REQUESTED"
    OPEN = "OPEN"
    CLOSED = "CLOSED"
    NOT_JOINED_REQUESTED = "NOT_JOINED_REQUESTED"

class GetDirectorySortByEnum(str, Enum):
    LAST_CONTENT = "LAST_CONTENT"
    NAME = "NAME"
    NUMBER_OF_USERS = "NUMBER_OF_USERS"
    CREATION_DATE = "CREATION_DATE"

class GetDirectorySortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass
class GetDirectoryQueryParams:
    filter: GetDirectoryFilterEnum = field(metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    sort_by: GetDirectorySortByEnum = field(metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: GetDirectorySortOrderEnum = field(metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    page_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pagePointer', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDirectorySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDirectoryRequest:
    query_params: GetDirectoryQueryParams = field()
    security: GetDirectorySecurity = field()
    

@dataclass
class GetDirectoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    directory_result: Optional[Any] = field(default=None)
    
