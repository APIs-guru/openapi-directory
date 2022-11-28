from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RetargetingGetDatapointsCountPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class RetargetingGetDatapointsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"


@dataclass
class RetargetingGetDatapointsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    only_favorites: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyFavorites', 'style': 'form', 'explode': True }})
    status: Optional[RetargetingGetDatapointsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class RetargetingGetDatapointsCountRequest:
    path_params: RetargetingGetDatapointsCountPathParams = field()
    query_params: RetargetingGetDatapointsCountQueryParams = field()
    

@dataclass
class RetargetingGetDatapointsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
