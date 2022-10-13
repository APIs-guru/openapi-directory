from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountPutDomainWhitelistRequests:
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_core_dto_accounting_domain_whitelist_entry1: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_core_dto_accounting_domain_whitelist_entry2: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AccountPutDomainWhitelistRequest:
    request: AccountPutDomainWhitelistRequests = field(default=None)
    

@dataclass
class AccountPutDomainWhitelistResponse:
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
