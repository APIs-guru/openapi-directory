from dataclasses import dataclass, field



@dataclass
class DeleteMailboxPathParams:
    mailbox_name: str = field(metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMailboxQueryParams:
    mailbox_name: str = field(metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteMailboxRequest:
    path_params: DeleteMailboxPathParams = field()
    query_params: DeleteMailboxQueryParams = field()
    

@dataclass
class DeleteMailboxResponse:
    content_type: str = field()
    status_code: int = field()
    
