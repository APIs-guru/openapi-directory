from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetLogRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetLogResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_log_200_application_json_string: Optional[str] = field(default=None)
    
