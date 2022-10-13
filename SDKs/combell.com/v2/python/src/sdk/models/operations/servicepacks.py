from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ServicepacksResponse:
    content_type: str = field(default=None)
    servicepacks: Optional[List[shared.Servicepack]] = field(default=None)
    status_code: int = field(default=None)
    
