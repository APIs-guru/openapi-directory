from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetXsdResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
