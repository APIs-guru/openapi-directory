from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeMailboxPasswordPathParams:
    mailbox_name: str = field(default=None, metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeMailboxPasswordQueryParams:
    mailbox_name: str = field(default=None, metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeMailboxPasswordRequest:
    path_params: ChangeMailboxPasswordPathParams = field(default=None)
    query_params: ChangeMailboxPasswordQueryParams = field(default=None)
    request: Optional[shared.UpdateMailboxPasswordRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeMailboxPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
