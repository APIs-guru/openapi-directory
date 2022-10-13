from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TerminateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    terminate_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
