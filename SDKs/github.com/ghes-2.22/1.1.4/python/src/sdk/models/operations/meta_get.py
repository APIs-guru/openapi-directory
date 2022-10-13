from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MetaGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_overview: Optional[shared.APIOverview] = field(default=None)
    
