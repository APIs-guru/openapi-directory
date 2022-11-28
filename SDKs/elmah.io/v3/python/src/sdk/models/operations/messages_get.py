from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesGetRequest:
    path_params: MessagesGetPathParams = field()
    

@dataclass
class MessagesGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    message: Optional[shared.Message] = field(default=None)
    
