from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    server_config: Optional[Any] = field(default=None)
    
