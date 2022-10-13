from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureMailboxAutoForwardPathParams:
    mailbox_name: str = field(default=None, metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureMailboxAutoForwardQueryParams:
    mailbox_name: str = field(default=None, metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureMailboxAutoForwardRequest:
    path_params: ConfigureMailboxAutoForwardPathParams = field(default=None)
    query_params: ConfigureMailboxAutoForwardQueryParams = field(default=None)
    request: Optional[shared.AutoForward] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureMailboxAutoForwardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
