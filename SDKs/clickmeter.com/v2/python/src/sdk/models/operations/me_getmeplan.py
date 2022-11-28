from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeGetMePlanResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_accounting_plan: Optional[shared.APICoreDtoAccountingPlan] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
