from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PingResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ping_200_text_plain_string: Optional[str] = field(default=None)
    
