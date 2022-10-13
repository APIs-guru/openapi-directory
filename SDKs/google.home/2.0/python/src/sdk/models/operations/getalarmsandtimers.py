from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlarmsandTimersResponse:
    content_type: str = field(default=None)
    example18: Optional[shared.Example18] = field(default=None)
    status_code: int = field(default=None)
    
