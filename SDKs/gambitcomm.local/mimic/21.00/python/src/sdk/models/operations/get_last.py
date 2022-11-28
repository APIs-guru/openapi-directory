from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLastResponse:
    content_type: str = field()
    status_code: int = field()
    get_last_200_application_json_int32_integer: Optional[int] = field(default=None)
    
