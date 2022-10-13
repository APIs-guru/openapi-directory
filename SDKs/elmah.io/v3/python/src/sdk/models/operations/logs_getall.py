from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LogsGetAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    logs: Optional[List[shared.Log]] = field(default=None)
    status_code: int = field(default=None)
    
