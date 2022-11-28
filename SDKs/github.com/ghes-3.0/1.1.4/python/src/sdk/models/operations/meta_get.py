from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MetaGetResponse:
    content_type: str = field()
    status_code: int = field()
    api_overview: Optional[shared.APIOverview] = field(default=None)
    
