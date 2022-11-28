from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessGetEnabledResponse:
    content_type: str = field()
    status_code: int = field()
    access_get_enabled_200_application_json_string: Optional[str] = field(default=None)
    
