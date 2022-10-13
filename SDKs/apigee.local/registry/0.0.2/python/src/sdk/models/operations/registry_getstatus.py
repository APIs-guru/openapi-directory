from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetStatusResponse:
    content_type: str = field(default=None)
    status: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
