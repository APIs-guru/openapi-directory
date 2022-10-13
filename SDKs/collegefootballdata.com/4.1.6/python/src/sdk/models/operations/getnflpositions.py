from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNflPositionsResponse:
    content_type: str = field(default=None)
    draft_positions: Optional[List[shared.DraftPosition]] = field(default=None)
    status_code: int = field(default=None)
    
