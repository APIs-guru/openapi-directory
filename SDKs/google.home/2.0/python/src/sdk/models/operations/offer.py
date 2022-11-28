from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OfferResponse:
    content_type: str = field()
    status_code: int = field()
    example12: Optional[shared.Example12] = field(default=None)
    
