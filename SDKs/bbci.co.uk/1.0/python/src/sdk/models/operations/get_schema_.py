from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSchemaResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
