from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayStatTypesResponse:
    content_type: str = field()
    status_code: int = field()
    play_stat_types: Optional[List[shared.PlayStatType]] = field(default=None)
    
