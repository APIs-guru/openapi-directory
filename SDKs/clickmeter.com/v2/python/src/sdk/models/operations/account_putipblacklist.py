from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPutIPBlacklistRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_ip_blacklist_entry1: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_ip_blacklist_entry2: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AccountPutIPBlacklistRequest:
    request: AccountPutIPBlacklistRequests = field()
    

@dataclass
class AccountPutIPBlacklistResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
