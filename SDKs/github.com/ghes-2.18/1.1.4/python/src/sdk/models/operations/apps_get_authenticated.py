from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AppsGetAuthenticatedResponse:
    content_type: str = field()
    status_code: int = field()
    integration: Optional[dict[str, Any]] = field(default=None)
    
