from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class TagsGetDatapointsCountPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagsGetDatapointsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"

class TagsGetDatapointsCountTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class TagsGetDatapointsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    status: Optional[TagsGetDatapointsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    type: Optional[TagsGetDatapointsCountTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class TagsGetDatapointsCountRequest:
    path_params: TagsGetDatapointsCountPathParams = field(default=None)
    query_params: TagsGetDatapointsCountQueryParams = field(default=None)
    

@dataclass
class TagsGetDatapointsCountResponse:
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
