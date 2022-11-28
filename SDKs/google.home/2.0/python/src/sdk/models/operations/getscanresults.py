from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetScanResultsResponse:
    content_type: str = field()
    status_code: int = field()
    example112s: Optional[List[shared.Example112]] = field(default=None)
    
