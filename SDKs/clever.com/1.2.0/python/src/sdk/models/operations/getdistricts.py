from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictsResponse:
    content_type: str = field()
    status_code: int = field()
    districts_response: Optional[shared.DistrictsResponse] = field(default=None)
    
