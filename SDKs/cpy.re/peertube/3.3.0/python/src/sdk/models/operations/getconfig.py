from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConfigResponse:
    content_type: str = field(default=None)
    server_config: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
