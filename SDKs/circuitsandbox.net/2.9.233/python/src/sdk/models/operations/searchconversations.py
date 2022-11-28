from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

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
    term: str = field(metadata={'query_param': { 'field_name': 'term', 'style': 'form', 'explode': True }})
    include_item_ids: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeItemIds', 'style': 'form', 'explode': True }})
    scope: Optional[SearchConversationsScopeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchConversationsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchConversationsRequest:
    query_params: SearchConversationsQueryParams = field()
    security: SearchConversationsSecurity = field()
    

@dataclass
class SearchConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversation_search_result: Optional[Any] = field(default=None)
    
