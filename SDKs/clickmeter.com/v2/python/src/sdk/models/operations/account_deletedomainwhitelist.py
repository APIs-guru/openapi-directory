from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteDomainWhitelistPathParams:
    whitelist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'whitelistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteDomainWhitelistRequest:
    path_params: AccountDeleteDomainWhitelistPathParams = field(default=None)
    

@dataclass
class AccountDeleteDomainWhitelistResponse:
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
