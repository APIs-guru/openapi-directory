from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetLogRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetLogResponse:
    content_type: str = field()
    status_code: int = field()
    set_log_200_application_json_string: Optional[str] = field(default=None)
    
