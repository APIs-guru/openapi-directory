from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsTransactionResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
