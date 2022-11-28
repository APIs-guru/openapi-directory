from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagsGetDatapointsPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagsGetDatapointsStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"
    PAUSED = "paused"
    SPAM = "spam"

class TagsGetDatapointsTypeEnum(str, Enum):
    TP = "tp"
    TL = "tl"


@dataclass
class TagsGetDatapointsQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    status: Optional[TagsGetDatapointsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    type: Optional[TagsGetDatapointsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class TagsGetDatapointsRequest:
    path_params: TagsGetDatapointsPathParams = field()
    query_params: TagsGetDatapointsQueryParams = field()
    

@dataclass
class TagsGetDatapointsResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    
