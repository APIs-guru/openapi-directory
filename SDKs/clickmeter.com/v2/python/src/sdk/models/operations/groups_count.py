from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GroupsCountStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"


@dataclass
class GroupsCountQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    status: Optional[GroupsCountStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    write: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'write', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsCountRequest:
    query_params: GroupsCountQueryParams = field(default=None)
    

@dataclass
class GroupsCountResponse:
    api_core_responses_count_responce: Optional[shared.APICoreResponsesCountResponce] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
