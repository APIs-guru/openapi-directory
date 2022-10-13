from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountDeleteIPBlacklistPathParams:
    blacklist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'blacklistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountDeleteIPBlacklistRequest:
    path_params: AccountDeleteIPBlacklistPathParams = field(default=None)
    

@dataclass
class AccountDeleteIPBlacklistResponse:
    api_core_dto_accounting_ip_blacklist_entry: Optional[shared.APICoreDtoAccountingIPBlacklistEntry] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
