from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScanResultsResponse:
    content_type: str = field(default=None)
    example112s: Optional[List[shared.Example112]] = field(default=None)
    status_code: int = field(default=None)
    
