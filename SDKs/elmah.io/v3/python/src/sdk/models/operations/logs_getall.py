from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LogsGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    logs: Optional[List[shared.Log]] = field(default=None)
    
