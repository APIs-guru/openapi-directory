from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GroupsGetDatapointsCountPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GroupsGetDatapointsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"

class GroupsGetDatapointsCountTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class GroupsGetDatapointsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    only_favorites: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'onlyFavorites', 'style': 'form', 'explode': True }})
    status: Optional[GroupsGetDatapointsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    type: Optional[GroupsGetDatapointsCountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetDatapointsCountRequest:
    path_params: GroupsGetDatapointsCountPathParams = field()
    query_params: GroupsGetDatapointsCountQueryParams = field()
    

@dataclass
class GroupsGetDatapointsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
