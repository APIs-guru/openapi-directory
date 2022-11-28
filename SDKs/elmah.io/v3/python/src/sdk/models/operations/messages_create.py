from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesCreatePathParams:
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesCreateRequests:
    create_message: Optional[shared.CreateMessage] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_message1: Optional[shared.CreateMessage] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_message2: Optional[shared.CreateMessage] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_message3: Optional[shared.CreateMessage] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MessagesCreateRequest:
    path_params: MessagesCreatePathParams = field()
    request: Optional[MessagesCreateRequests] = field(default=None)
    

@dataclass
class MessagesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    create_message_result: Optional[shared.CreateMessageResult] = field(default=None)
    
