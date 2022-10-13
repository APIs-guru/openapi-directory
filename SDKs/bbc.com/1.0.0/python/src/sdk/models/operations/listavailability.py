from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListAvailabilityAvailabilityEnum(str, Enum):
    AVAILABLE = "available"

class ListAvailabilitySortEnum(str, Enum):
    SCHEDULED_START = "scheduled_start"

class ListAvailabilitySortDirectionEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"

class ListAvailabilityTerritoryEnum(str, Enum):
    UK = "uk"
    NONUK = "nonuk"
    WORLD = "world"


@dataclass
class ListAvailabilityQueryParams:
    availability: Optional[List[ListAvailabilityAvailabilityEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    debug: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    descendants_of: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'descendants_of', 'style': 'form', 'explode': True }})
    media_set: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'media_set', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    sort: Optional[ListAvailabilitySortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: Optional[ListAvailabilitySortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    territory: Optional[List[ListAvailabilityTerritoryEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'territory', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAvailabilityRequest:
    query_params: ListAvailabilityQueryParams = field(default=None)
    

@dataclass
class ListAvailabilityResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
