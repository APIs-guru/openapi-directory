from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostKeyResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
