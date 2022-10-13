from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OfferResponse:
    content_type: str = field(default=None)
    example12: Optional[shared.Example12] = field(default=None)
    status_code: int = field(default=None)
    
