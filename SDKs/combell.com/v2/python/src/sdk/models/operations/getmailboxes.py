from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMailboxesQueryParams:
    domain_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMailboxesRequest:
    query_params: GetMailboxesQueryParams = field(default=None)
    

@dataclass
class GetMailboxesResponse:
    content_type: str = field(default=None)
    mailboxes: Optional[List[shared.Mailbox]] = field(default=None)
    status_code: int = field(default=None)
    
