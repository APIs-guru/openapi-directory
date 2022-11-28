from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNflPositionsResponse:
    content_type: str = field()
    status_code: int = field()
    draft_positions: Optional[List[shared.DraftPosition]] = field(default=None)
    
