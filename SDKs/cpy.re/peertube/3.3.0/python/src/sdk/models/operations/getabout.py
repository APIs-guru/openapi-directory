from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAboutResponse:
    content_type: str = field(default=None)
    server_config_about: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
