from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMeResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
