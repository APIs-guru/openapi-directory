from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccessListResponse:
    access_entries: Optional[List[shared.AccessEntry]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
