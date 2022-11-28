from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    get_version_200_application_json_string: Optional[str] = field(default=None)
    
