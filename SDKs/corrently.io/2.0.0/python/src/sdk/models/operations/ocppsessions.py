from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OcppSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    easee_chargers: Optional[List[shared.EaseeCharger]] = field(default=None)
    
