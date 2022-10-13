from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSavedNetworksResponse:
    content_type: str = field(default=None)
    example113s: Optional[List[shared.Example113]] = field(default=None)
    status_code: int = field(default=None)
    
