from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeMailboxPasswordPathParams:
    mailbox_name: str = field(metadata={'path_param': { 'field_name': 'mailboxName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeMailboxPasswordQueryParams:
    mailbox_name: str = field(metadata={'query_param': { 'field_name': 'mailbox_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeMailboxPasswordRequest:
    path_params: ChangeMailboxPasswordPathParams = field()
    query_params: ChangeMailboxPasswordQueryParams = field()
    request: Optional[shared.UpdateMailboxPasswordRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeMailboxPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    
