from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAboutResponse:
    content_type: str = field()
    status_code: int = field()
    server_config_about: Optional[Any] = field(default=None)
    
