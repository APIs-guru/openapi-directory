from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CasesGeneralStatsListResponse:
    content_type: str = field(default=None)
    general_stats: Optional[List[shared.GeneralStats]] = field(default=None)
    status_code: int = field(default=None)
    
