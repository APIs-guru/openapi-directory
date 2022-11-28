from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostBinResponse:
    content_type: str = field()
    status_code: int = field()
    create_status: Optional[Any] = field(default=None)
    error: Optional[Any] = field(default=None)
    
