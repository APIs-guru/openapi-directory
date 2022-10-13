from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesDeleteAllPathParams:
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesDeleteAllRequests:
    search: Optional[shared.Search] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    search1: Optional[shared.Search] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    search2: Optional[shared.Search] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    search3: Optional[shared.Search] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MessagesDeleteAllRequest:
    path_params: MessagesDeleteAllPathParams = field(default=None)
    request: Optional[MessagesDeleteAllRequests] = field(default=None)
    

@dataclass
class MessagesDeleteAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
