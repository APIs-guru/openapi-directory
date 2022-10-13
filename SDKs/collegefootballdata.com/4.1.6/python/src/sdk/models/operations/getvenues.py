from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVenuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    venues: Optional[List[shared.Venue]] = field(default=None)
    
