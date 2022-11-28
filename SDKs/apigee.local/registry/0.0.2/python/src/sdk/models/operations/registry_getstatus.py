from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    status: Optional[Any] = field(default=None)
    
