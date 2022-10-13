from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StatusResponse:
    content_type: str = field(default=None)
    example110: Optional[shared.Example110] = field(default=None)
    status_code: int = field(default=None)
    
