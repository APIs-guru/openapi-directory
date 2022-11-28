from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class BalanceGetResponse:
    content_type: str = field()
    status_code: int = field()
    balance_get_500_application_json_any: Optional[Any] = field(default=None)
    
