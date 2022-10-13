from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSchemaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
