from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetGuestPathParams:
    guest_id: int = field(default=None, metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountGetGuestRequest:
    path_params: AccountGetGuestPathParams = field(default=None)
    

@dataclass
class AccountGetGuestResponse:
    api_core_dto_accounting_guest: Optional[shared.APICoreDtoAccountingGuest] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
