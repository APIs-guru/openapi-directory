from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPutGuestRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_accounting_guest: Optional[shared.APICoreDtoAccountingGuest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_guest1: Optional[shared.APICoreDtoAccountingGuest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_guest2: Optional[shared.APICoreDtoAccountingGuest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AccountPutGuestRequest:
    request: AccountPutGuestRequests = field()
    

@dataclass
class AccountPutGuestResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_guest: Optional[shared.APICoreDtoAccountingGuest] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
