from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMaxResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_max_200_application_json_int32_integer: Optional[int] = field(default=None)
    
