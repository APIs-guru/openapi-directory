from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class GetCommunityConversationsOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class GetCommunityConversationsSortEnum(str, Enum):
    ALPHABETICALLY = "ALPHABETICALLY"
    RECENT_ACTIVITY = "RECENT_ACTIVITY"
    POPULARITY = "POPULARITY"


@dataclass
class GetCommunityConversationsQueryParams:
    include_own: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeOwn', 'style': 'form', 'explode': True }})
    order: Optional[GetCommunityConversationsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'results', 'style': 'form', 'explode': True }})
    sort: Optional[GetCommunityConversationsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start_index: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommunityConversationsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCommunityConversationsRequest:
    query_params: GetCommunityConversationsQueryParams = field(default=None)
    security: GetCommunityConversationsSecurity = field(default=None)
    

@dataclass
class GetCommunityConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversations: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
