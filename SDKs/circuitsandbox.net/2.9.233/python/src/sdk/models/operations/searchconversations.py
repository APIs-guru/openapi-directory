from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class SearchConversationsScopeEnum(str, Enum):
    FILES = "FILES"
    PEOPLE = "PEOPLE"
    MEMBERS = "MEMBERS"
    MESSAGES = "MESSAGES"
    SENTBY = "SENTBY"
    ALL = "ALL"
    CONVERSATIONS = "CONVERSATIONS"
    LABEL = "LABEL"
    FILTER = "FILTER"


@dataclass
class SearchConversationsQueryParams:
    include_item_ids: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemIds', 'style': 'form', 'explode': True }})
    scope: Optional[SearchConversationsScopeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    term: str = field(default=None, metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchConversationsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchConversationsRequest:
    query_params: SearchConversationsQueryParams = field(default=None)
    security: SearchConversationsSecurity = field(default=None)
    

@dataclass
class SearchConversationsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversation_search_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
