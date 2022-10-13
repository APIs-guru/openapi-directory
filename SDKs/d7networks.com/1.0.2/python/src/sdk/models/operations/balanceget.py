from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class BalanceGetResponse:
    balance_get_500_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
