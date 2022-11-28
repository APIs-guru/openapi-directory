from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetVenuesResponse:
    content_type: str = field()
    status_code: int = field()
    venues: Optional[List[shared.Venue]] = field(default=None)
    
