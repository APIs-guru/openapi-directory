from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureMailboxAutoReplyPathParams:
    mailbox_name: str = field(metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureMailboxAutoReplyQueryParams:
    mailbox_name: str = field(metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureMailboxAutoReplyRequest:
    path_params: ConfigureMailboxAutoReplyPathParams = field()
    query_params: ConfigureMailboxAutoReplyQueryParams = field()
    request: Optional[shared.AutoReply] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureMailboxAutoReplyResponse:
    content_type: str = field()
    status_code: int = field()
    
