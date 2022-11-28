from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RateLimitGetResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    rate_limit_overview: Optional[shared.RateLimitOverview] = field(default=None)
    
