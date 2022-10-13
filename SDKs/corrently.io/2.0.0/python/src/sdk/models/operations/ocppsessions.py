from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OcppSessionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    easee_chargers: Optional[List[shared.EaseeCharger]] = field(default=None)
    
