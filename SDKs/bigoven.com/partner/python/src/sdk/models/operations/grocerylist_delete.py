from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GroceryListDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
