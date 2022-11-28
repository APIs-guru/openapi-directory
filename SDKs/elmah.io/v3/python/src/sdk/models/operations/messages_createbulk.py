from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MessagesCreateBulkPathParams:
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesCreateBulkRequests:
    create_messages: Optional[List[shared.CreateMessage]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_messages1: Optional[List[shared.CreateMessage]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_messages2: Optional[List[shared.CreateMessage]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    create_messages3: Optional[List[shared.CreateMessage]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class MessagesCreateBulkRequest:
    path_params: MessagesCreateBulkPathParams = field()
    request: Optional[MessagesCreateBulkRequests] = field(default=None)
    

@dataclass
class MessagesCreateBulkResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    create_bulk_message_results: Optional[List[shared.CreateBulkMessageResult]] = field(default=None)
    
