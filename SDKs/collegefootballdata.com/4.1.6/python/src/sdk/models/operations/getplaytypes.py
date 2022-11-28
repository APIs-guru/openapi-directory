from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPlayTypesResponse:
    content_type: str = field()
    status_code: int = field()
    play_types: Optional[List[shared.PlayType]] = field(default=None)
    
