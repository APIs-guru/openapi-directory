from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DataPointsGetSortDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class DataPointsGetStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"

class DataPointsGetTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class DataPointsGetQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    only_favorites: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyFavorites', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[DataPointsGetSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortDirection', 'style': 'form', 'explode': True }})
    status: Optional[DataPointsGetStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    type: Optional[DataPointsGetTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DataPointsGetRequest:
    query_params: DataPointsGetQueryParams = field()
    

@dataclass
class DataPointsGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    
