from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSavedNetworksResponse:
    content_type: str = field()
    status_code: int = field()
    example113s: Optional[List[shared.Example113]] = field(default=None)
    
