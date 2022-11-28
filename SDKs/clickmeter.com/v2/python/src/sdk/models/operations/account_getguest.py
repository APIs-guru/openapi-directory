from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AccountGetGuestPathParams:
    guest_id: int = field(metadata={'path_param': { 'field_name': 'guestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountGetGuestRequest:
    path_params: AccountGetGuestPathParams = field()
    

@dataclass
class AccountGetGuestResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_guest: Optional[shared.APICoreDtoAccountingGuest] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
