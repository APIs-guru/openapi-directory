from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UptimeChecksGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    uptime_checks: Optional[List[shared.UptimeCheck]] = field(default=None)
    
