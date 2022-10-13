from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AppsGetAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    integration: Optional[dict[str, Any]] = field(default=None)
    
