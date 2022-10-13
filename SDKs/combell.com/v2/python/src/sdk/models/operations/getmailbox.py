from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMailboxPathParams:
    mailbox_name: str = field(default=None, metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMailboxQueryParams:
    mailbox_name: str = field(default=None, metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMailboxRequest:
    path_params: GetMailboxPathParams = field(default=None)
    query_params: GetMailboxQueryParams = field(default=None)
    

@dataclass
class GetMailboxResponse:
    content_type: str = field(default=None)
    mailbox_detail: Optional[shared.MailboxDetail] = field(default=None)
    status_code: int = field(default=None)
    
