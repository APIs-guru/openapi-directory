from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetConversationsByLabelPathParams:
    label_id: str = field(metadata={'path_param': { 'field_name': 'labelId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConversationsByLabelQueryParams:
    next_page_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPagePointer', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsByLabelSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConversationsByLabelRequest:
    path_params: GetConversationsByLabelPathParams = field()
    query_params: GetConversationsByLabelQueryParams = field()
    security: GetConversationsByLabelSecurity = field()
    

@dataclass
class GetConversationsByLabelResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    conversations_page: Optional[Any] = field(default=None)
    
