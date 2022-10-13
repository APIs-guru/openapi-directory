from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeGetMePlanResponse:
    api_core_dto_accounting_plan: Optional[shared.APICoreDtoAccountingPlan] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
