from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConferencesResponse:
    conferences: Optional[List[shared.Conference]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
