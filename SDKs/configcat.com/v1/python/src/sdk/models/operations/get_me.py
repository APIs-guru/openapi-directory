from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMeResponse:
    content_type: str = field(default=None)
    me_model: Optional[shared.MeModel] = field(default=None)
    status_code: int = field(default=None)
    
