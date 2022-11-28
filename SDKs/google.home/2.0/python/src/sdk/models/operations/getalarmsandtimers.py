from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlarmsandTimersResponse:
    content_type: str = field()
    status_code: int = field()
    example18: Optional[shared.Example18] = field(default=None)
    
