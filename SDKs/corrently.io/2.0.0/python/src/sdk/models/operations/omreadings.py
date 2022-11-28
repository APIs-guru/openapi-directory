from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OmReadingsResponse:
    content_type: str = field()
    status_code: int = field()
    ommeters: Optional[List[shared.Ommeters]] = field(default=None)
    
