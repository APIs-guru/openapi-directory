from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteIPBlacklistPathParams:
    blacklist_id: str = field(metadata={'path_param': { 'field_name': 'blacklistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteIPBlacklistRequest:
    path_params: AccountDeleteIPBlacklistPathParams = field()
    

@dataclass
class AccountDeleteIPBlacklistResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
