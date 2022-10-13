from dataclasses import dataclass, field



@dataclass
class DeleteMailboxPathParams:
    mailbox_name: str = field(default=None, metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMailboxQueryParams:
    mailbox_name: str = field(default=None, metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteMailboxRequest:
    path_params: DeleteMailboxPathParams = field(default=None)
    query_params: DeleteMailboxQueryParams = field(default=None)
    

@dataclass
class DeleteMailboxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
