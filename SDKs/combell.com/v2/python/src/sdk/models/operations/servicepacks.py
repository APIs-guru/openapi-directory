from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicepacksResponse:
    content_type: str = field()
    status_code: int = field()
    servicepacks: Optional[List[shared.Servicepack]] = field(default=None)
    
