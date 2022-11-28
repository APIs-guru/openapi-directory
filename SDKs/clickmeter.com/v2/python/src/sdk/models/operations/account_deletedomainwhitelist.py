from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteDomainWhitelistPathParams:
    whitelist_id: str = field(metadata={'path_param': { 'field_name': 'whitelistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteDomainWhitelistRequest:
    path_params: AccountDeleteDomainWhitelistPathParams = field()
    

@dataclass
class AccountDeleteDomainWhitelistResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_domain_whitelist_entry: Optional[shared.APICoreDtoAccountingDomainWhitelistEntry] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
