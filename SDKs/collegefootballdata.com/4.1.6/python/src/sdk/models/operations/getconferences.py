from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConferencesResponse:
    content_type: str = field()
    status_code: int = field()
    conferences: Optional[List[shared.Conference]] = field(default=None)
    
