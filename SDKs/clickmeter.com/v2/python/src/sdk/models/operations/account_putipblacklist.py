from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPutIPBlacklistRequests:
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_ip_blacklist_entry1: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_ip_blacklist_entry2: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AccountPutIPBlacklistRequest:
    request: AccountPutIPBlacklistRequests = field(default=None)
    

@dataclass
class AccountPutIPBlacklistResponse:
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
