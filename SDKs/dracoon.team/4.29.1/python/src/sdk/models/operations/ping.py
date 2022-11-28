from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PingResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ping_200_text_plain_string: Optional[str] = field(default=None)
    
