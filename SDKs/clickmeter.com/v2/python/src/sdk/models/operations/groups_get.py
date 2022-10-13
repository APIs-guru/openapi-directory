from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GroupsGetStatusEnum(str, Enum):
    DELETED = "deleted"
    ACTIVE = "active"


@dataclass
class GroupsGetQueryParams:
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    status: Optional[GroupsGetStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    text_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    write: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'write', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsGetRequest:
    query_params: GroupsGetQueryParams = field(default=None)
    

@dataclass
class GroupsGetResponse:
    api_core_responses_entities_response_api_core_responses_entity_uri_system_int64_: Optional[shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
