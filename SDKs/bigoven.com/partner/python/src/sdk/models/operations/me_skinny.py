from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeSkinnyResponse:
    content_type: str = field()
    status_code: int = field()
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
