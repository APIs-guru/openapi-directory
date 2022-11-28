from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TimezonesResponse:
    content_type: str = field()
    status_code: int = field()
    example14s: Optional[List[shared.Example14]] = field(default=None)
    
