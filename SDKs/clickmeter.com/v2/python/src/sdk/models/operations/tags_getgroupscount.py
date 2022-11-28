from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class TagsGetGroupsCountPathParams:
    tag_id: int = field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    
class TagsGetGroupsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"


@dataclass
class TagsGetGroupsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    status: Optional[TagsGetGroupsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class TagsGetGroupsCountRequest:
    path_params: TagsGetGroupsCountPathParams = field()
    query_params: TagsGetGroupsCountQueryParams = field()
    

@dataclass
class TagsGetGroupsCountResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
