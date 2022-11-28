from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccessListResponse:
    content_type: str = field()
    status_code: int = field()
    access_entries: Optional[List[shared.AccessEntry]] = field(default=None)
    
