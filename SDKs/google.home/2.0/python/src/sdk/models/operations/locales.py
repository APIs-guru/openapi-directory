from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LocalesResponse:
    content_type: str = field()
    status_code: int = field()
    example15s: Optional[List[shared.Example15]] = field(default=None)
    
