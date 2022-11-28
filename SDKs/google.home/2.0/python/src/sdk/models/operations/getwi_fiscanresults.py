from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWiFiScanResultsResponse:
    content_type: str = field()
    status_code: int = field()
    example114s: Optional[List[shared.Example114]] = field(default=None)
    
