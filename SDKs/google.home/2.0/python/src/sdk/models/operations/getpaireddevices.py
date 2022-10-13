from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPairedDevicesResponse:
    content_type: str = field(default=None)
    example111s: Optional[List[shared.Example111]] = field(default=None)
    status_code: int = field(default=None)
    
