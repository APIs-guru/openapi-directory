from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeIndexResponse:
    api2_models_big_oven_user: Optional[shared.Api2ModelsBigOvenUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
