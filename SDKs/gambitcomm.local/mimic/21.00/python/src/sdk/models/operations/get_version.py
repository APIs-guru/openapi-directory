from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_version_200_application_json_string: Optional[str] = field(default=None)
    
