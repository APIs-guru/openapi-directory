from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMailboxPathParams:
    mailbox_name: str = field(metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMailboxQueryParams:
    mailbox_name: str = field(metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMailboxRequest:
    path_params: GetMailboxPathParams = field()
    query_params: GetMailboxQueryParams = field()
    

@dataclass
class GetMailboxResponse:
    content_type: str = field()
    status_code: int = field()
    mailbox_detail: Optional[shared.MailboxDetail] = field(default=None)
    
