from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class UptimeChecksGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    uptime_checks: Optional[List[shared.UptimeCheck]] = field(default=None)
    
