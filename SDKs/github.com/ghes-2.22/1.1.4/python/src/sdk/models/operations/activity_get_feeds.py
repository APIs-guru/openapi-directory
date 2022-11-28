from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetFeedsResponse:
    content_type: str = field()
    status_code: int = field()
    feed: Optional[shared.Feed] = field(default=None)
    
