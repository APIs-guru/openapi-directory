from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPutDomainWhitelistRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_domain_whitelist_entry1: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_domain_whitelist_entry2: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AccountPutDomainWhitelistRequest:
    request: AccountPutDomainWhitelistRequests = field()
    

@dataclass
class AccountPutDomainWhitelistResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
