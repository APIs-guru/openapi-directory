from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TimezonesResponse:
    content_type: str = field(default=None)
    example14s: Optional[List[shared.Example14]] = field(default=None)
    status_code: int = field(default=None)
    
