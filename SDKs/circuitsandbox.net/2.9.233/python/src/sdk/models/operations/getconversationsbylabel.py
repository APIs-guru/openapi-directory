from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConversationsByLabelPathParams:
    label_id: str = field(default=None, metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversationsByLabelQueryParams:
    next_page_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPagePointer', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsByLabelSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsByLabelRequest:
    path_params: GetConversationsByLabelPathParams = field(default=None)
    query_params: GetConversationsByLabelQueryParams = field(default=None)
    security: GetConversationsByLabelSecurity = field(default=None)
    

@dataclass
class GetConversationsByLabelResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    conversations_page: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
