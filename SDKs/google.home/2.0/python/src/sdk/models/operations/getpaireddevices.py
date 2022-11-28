from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPairedDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    example111s: Optional[List[shared.Example111]] = field(default=None)
    
