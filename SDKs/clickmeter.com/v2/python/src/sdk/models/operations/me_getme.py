from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeGetMeResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_user: Optional[shared.APICoreDtoAccountingUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
