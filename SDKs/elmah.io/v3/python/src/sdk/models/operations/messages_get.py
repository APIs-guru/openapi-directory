from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesGetRequest:
    path_params: MessagesGetPathParams = field(default=None)
    

@dataclass
class MessagesGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    message: Optional[shared.Message] = field(default=None)
    status_code: int = field(default=None)
    
