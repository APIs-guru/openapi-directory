from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWalletResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
